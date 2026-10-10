import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Logo } from "./components/Logo";
import { externalLinks } from "./lib/site-data";

const navItems = [
  ["首页", "/"],
  ["产品功能", "/product"],
  ["行业案例", "/cases"],
  ["技术资源", "/resources"],
  ["关于我们", "/about"],
  ["联系我们", "/contact"],
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    let scrollTimer = 0;
    const updateScrollAtmosphere = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(window.scrollY / maxScroll, 1);
        document.documentElement.style.setProperty("--scroll-shift", `${progress * -110}px`);
        document.body.classList.add("is-scrolling");
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => document.body.classList.remove("is-scrolling"), 140);
      });
    };

    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    updateScrollAtmosphere();
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", updateScrollAtmosphere);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-section-visible"));
      return;
    }
    sections.forEach((section) => section.classList.add("reveal-section"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-section-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "关闭菜单" : "打开菜单"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Logo />
          <nav id="mobile-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="主导航">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={() => setMenuOpen(false)}>{label}</NavLink>
            ))}
          </nav>
          {menuOpen && <button className="menu-backdrop" aria-label="关闭导航遮罩" onClick={() => setMenuOpen(false)} />}
          <div className="header-actions">
            <a className="icon-button" href={externalLinks.github} target="_blank" rel="noreferrer" aria-label="访问 YiGraph GitHub" title="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>让自然语言成为人与图数据之间更直接的接口。</p>
          </div>
          <div>
            <h2>探索</h2>
            <Link to="/product">产品功能</Link>
            <Link to="/cases">行业案例</Link>
            <Link to="/resources">技术资源</Link>
          </div>
          <div>
            <h2>资源</h2>
            <a href={externalLinks.github} target="_blank" rel="noreferrer">GitHub 仓库</a>
            <a href={externalLinks.docs} target="_blank" rel="noreferrer">用户手册</a>
            <a href={externalLinks.paper} target="_blank" rel="noreferrer">AAG 论文</a>
          </div>
          <div>
            <h2>联系</h2>
            <Link to="/about">东北大学 iDC 实验室</Link>
            <Link to="/contact">合作与咨询</Link>
            <a href="mailto:superchency@gmail.com">superchency@gmail.com</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 YiGraph · Northeastern University iDC Lab</span>
          <span>Open research. Reliable graph intelligence.</span>
        </div>
      </footer>
    </div>
  );
}
