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
  const [metrics, setMetrics] = useState<{ stars: number | null; forks: number | null }>({ stars: null, forks: null });

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.github.com/repos/iDC-NEU/YiGraph", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: { stargazers_count?: number; forks_count?: number }) => {
        setMetrics({ stars: data.stargazers_count ?? null, forks: data.forks_count ?? null });
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return <>
    <AnimatedMetric value={metrics.stars} label="GitHub Stars" />
    <AnimatedMetric value={metrics.forks} label="社区 Forks" />
    <AnimatedMetric value={5} suffix="+" label="核心能力模块" />
  </>;
}
