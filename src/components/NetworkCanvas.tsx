import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; size: number };

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let nodes: Node[] = [];
    const pointer = { x: -1000, y: -1000 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(24, Math.floor(rect.width / 34));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (index * 89) % rect.width,
        y: (index * 47) % rect.height,
        vx: ((index % 5) - 2) * 0.06,
        vy: (((index * 3) % 7) - 3) * 0.045,
        size: index % 9 === 0 ? 2.6 : 1.2,
      }));
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        const dx = pointer.x - node.x;
        const dy = pointer.y - node.y;
        if (Math.hypot(dx, dy) < 130) {
          node.x -= dx * 0.0007;
          node.y -= dy * 0.0007;
        }
        for (let next = index + 1; next < nodes.length; next += 1) {
          const other = nodes[next];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 118) {
            context.beginPath();
            context.strokeStyle = `rgba(37, 210, 230, ${0.2 * (1 - distance / 118)})`;
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
        context.beginPath();
        context.fillStyle = node.size > 2 ? "#9eff6a" : "#39d9f2";
        context.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}
