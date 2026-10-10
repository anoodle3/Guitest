import { useEffect, useRef, useState } from "react";

function AnimatedMetric({ value, suffix = "", label }: { value: number | null; suffix?: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const metricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = metricRef.current;
    if (!element || value === null) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduceMotion) {
        setDisplayValue(value);
        return;
      }
      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / 900, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplayValue(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <div className="stat metric-stat" ref={metricRef}><strong>{value === null ? "—" : displayValue.toLocaleString("zh-CN")}{suffix}</strong><span>{label}</span></div>;
}

export function CommunityMetrics() {
  return <>
    <AnimatedMetric value={200} suffix="+" label="支持的图算法" />
    <AnimatedMetric value={5} suffix="+" label="行业应用场景" />
    <AnimatedMetric value={100} suffix="%" label="开源代码" />
    <AnimatedMetric value={30} suffix="+" label="篇核心论文" />
  </>;
}
