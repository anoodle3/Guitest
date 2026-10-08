import { ArrowRight, BookOpen, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { DemoVideo } from "../components/DemoVideo";
import { NetworkCanvas } from "../components/NetworkCanvas";
import { CommunityMetrics } from "../components/CommunityMetrics";
import { capabilities, cases, externalLinks, resources } from "../lib/site-data";

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <NetworkCanvas />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><Sparkles size={15} /> LLM × GRAPH ANALYTICS</div>
            <h1>用自然语言，<br /><span>驱动图数据智能分析</span></h1>
            <p>易图 YiGraph 将大语言模型与确定性图算法融合，从多源数据构图、智能分析到可追溯报告，让复杂关系分析更直接、更可信。</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/cases">查看行业案例 <ArrowRight size={18} /></Link>
              <a className="button button-secondary" href={externalLinks.github} target="_blank" rel="noreferrer"><Github size={18} />访问 GitHub</a>
            </div>
            <div className="hero-meta">
              <span><i />自然语言交互</span>
              <span><i />分析全程可追溯</span>
              <span><i />东北大学 iDC 实验室</span>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core"><span>Yi</span><small>GRAPH INTELLIGENCE</small></div>
            <div className="orbit-tag tag-a">NL Query</div>
            <div className="orbit-tag tag-b">Graph Engine</div>
            <div className="orbit-tag tag-c">Traceable</div>
          </div>
        </div>
        <div className="hero-index">01 / INTELLIGENCE</div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">CORE CAPABILITIES</span><h2>从问题到洞察，<br />一条完整的智能分析链路</h2></div>
            <p>不要求业务人员掌握复杂图算法。YiGraph 把专业能力封装在自然语言工作流中，同时保留每一步技术证据。</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text }) => (
              <Link className="capability-card" key={title} to="/product">
                <div className="card-top"><span>{number}</span><Icon size={28} /></div>
                <h3>{title}</h3><p>{text}</p>
                <span className="text-link">了解核心能力 <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-grid">
          <div className="lab-proof"><span className="lab-mark">iDC</span><div><strong>东北大学 iDC 实验室</strong><small>Intelligent Data Computing Laboratory</small></div></div>
          <CommunityMetrics />
        </div>
      </section>

      <section className="section home-demo-section">
        <div className="container home-demo-grid">
          <DemoVideo />
          <div className="video-copy"><span className="eyebrow">SEE IT IN ACTION</span><h2>56 秒，看见一次图分析</h2><p>在金融交易演示中，查看图数据、用自然语言提出问题，再由易图规划 DAG、调用算法并整理分析结果。</p><Link className="text-link large" to="/cases">查看完整案例与界面 <ArrowRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section cases-preview grid-field">
        <div className="container">
          <div className="section-heading row-heading"><div><span className="eyebrow">INDUSTRY SCENARIOS</span><h2>复杂关系，发生在每个行业</h2></div><Link className="text-link" to="/cases">查看全部案例 <ArrowRight size={16} /></Link></div>
          <div className="case-grid">
            {cases.slice(0, 4).map(({ icon: Icon, category, title, text }) => <Link className="case-card" to="/cases" key={title}><div className="case-icon"><Icon size={24} /></div><span>{category}</span><h3>{title}</h3><p>{text}</p><ArrowRight className="corner-arrow" size={19} /></Link>)}
          </div>
        </div>
      </section>

      <section className="section resource-preview">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">OPEN & VERIFIABLE</span><h2>从代码、文档到学术研究</h2><p>所有关键资源均可公开访问，让技术能力经得起验证。</p></div>
          <div className="resource-grid">
            {resources.map(({ icon: Icon, label, title, text, action, href }) => <a className="resource-card" href={href} target="_blank" rel="noreferrer" key={title}><div className="resource-icon"><Icon size={25} /></div><small>{label}</small><h3>{title}</h3><p>{text}</p><span className="text-link">{action} <ArrowRight size={16} /></span></a>)}
          </div>
          <div className="inline-cta"><BookOpen size={22} /><span>准备深入了解 YiGraph？</span><Link to="/resources">查看全部技术资源 <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}
