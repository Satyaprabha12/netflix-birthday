import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Lightweight canvas firecracker/particle animation                  */
/* ------------------------------------------------------------------ */

function useFirecrackers(canvasRef, active) {
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];
    let rafId;
    let spawnTimer;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#ff2d3d", "#ff6b6b", "#8b1e2b", "#ffffff"];

    function spawnBurst() {
      const cx = Math.random() * width;
      const cy = Math.random() * height * 0.8 + height * 0.05;
      const count = 8 + Math.floor(Math.random() * 6);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
        const speed = 0.6 + Math.random() * 1.4;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 45 + Math.random() * 25,
          size: 1 + Math.random() * 1.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function scheduleSpawn() {
      const delay = 900 + Math.random() * 1400;
      spawnTimer = setTimeout(() => {
        spawnBurst();
        scheduleSpawn();
      }, delay);
    }
    scheduleSpawn();

    function tick() {
      ctx.clearRect(0, 0, width, height);
      particles = particles.filter((p) => p.life < p.maxLife);

      for (const p of particles) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const t = p.life / p.maxLife;
        const alpha = 1 - t;

        ctx.beginPath();
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(spawnTimer);
      cancelAnimationFrame(rafId);
      particles = [];
    };
  }, [active, canvasRef]);
}

/* ------------------------------------------------------------------ */
/*  GirlfriendDayMessage                                               */
/* ------------------------------------------------------------------ */

export default function GirlfriendDayMessage() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useFirecrackers(canvasRef, visible);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden px-4
                  transition-all duration-1000 ease-out
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"}`}
      style={{
        background:
          "radial-gradient(ellipse at center, #1a0509 0%, #000000 70%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 text-center">
        <h2
          className={`text-white italic font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide
                      transition-all duration-1000 ease-out delay-150
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Happy Girlfriend&apos;s Day
        </h2>
        <p
          className={`mt-4 sm:mt-6 text-red-400/80 text-sm sm:text-base tracking-[0.2em] uppercase
                      transition-all duration-1000 ease-out delay-300
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          It&apos;s today. Go celebrate.
        </p>
      </div>
    </section>
  );
}