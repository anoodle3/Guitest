import { ArrowRight, BookOpenCheck, ExternalLink, FileCode2, Github, MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { externalLinks } from "../lib/site-data";

export function ResourcesPage() {
  return <>
    <PageHero eyebrow="TECHNICAL RESOURCES" title="开放资源，让每一步探索更有依据" description="从源代码到使用文档与研究论文，在一个页面找到理解、使用和研究 YiGraph 所需的关键入口。" />
    <section className="section resources-main"><div className="container resource-stack">
      <article className="resource-wide"><div className="resource-wide-icon"><Github size={35} /></div><div><span className="eyebrow">OPEN SOURCE</span><h2>YiGraph GitHub 仓库</h2><p>获取项目源码、查看版本动态、提交问题并参与社区协作。开放的代码让架构与实现经得起检验。</p><div className="resource-meta"><span>iDC-NEU / YiGraph</span><span>Stars / Forks 以仓库实时数据为准</span></div></div><a className="button button-primary" href={externalLinks.github} target="_blank" rel="noreferrer">访问仓库 <ExternalLink size={17} /></a></article>
      <article className="resource-wide"><div className="resource-wide-icon green"><BookOpenCheck size={35} /></div><div><span className="eyebrow">USER GUIDE</span><h2>YiGraph 用户手册</h2><p>覆盖环境配置、数据接入、分析任务和结果解读，帮助用户从首次使用快速进入完整工作流。</p><div className="chapter-list"><span>01 安装与部署</span><span>02 数据准备</span><span>03 分析工作流</span><span>04 结果导出</span></div></div><a className="button button-secondary" href={externalLinks.docs} target="_blank" rel="noreferrer">查看手册 <ExternalLink size={17} /></a></article>
      <article className="resource-wide"><div className="resource-wide-icon blue"><FileCode2 size={35} /></div><div><span className="eyebrow">ACADEMIC PAPER</span><h2>AAG 学术论文</h2><p>深入了解 YiGraph 的研究背景、设计方法、系统架构与实验评估，为图智能研究与引用提供完整依据。</p><blockquote>Towards Autonomous Graph Data Analytics with Analytics-Augmented Generation</blockquote><div className="resource-meta"><span>arXiv:2602.21604</span><span>2026</span><span>Graph Analytics</span></div></div><a className="button button-secondary" href={externalLinks.paper} target="_blank" rel="noreferrer">阅读论文 <ExternalLink size={17} /></a></article>
    </div></section>
    <section className="coming-resources grid-field"><div className="container"><div className="section-heading"><span className="eyebrow">MORE TO COME</span><h2>持续扩展的技术资料</h2></div><div className="coming-grid"><div><FileCode2 /><h3>API 文档</h3><p>标准接口与集成示例</p><span>规划中</span></div><div><BookOpenCheck /><h3>技术博客</h3><p>工程实践与研究分享</p><span>规划中</span></div></div></div></section>
    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">NEED HELP?</span><h2>使用资源时遇到问题？</h2></div><Link className="button button-primary" to="/contact"><MessageCircleQuestion size={18} />联系我们 <ArrowRight size={17} /></Link></div></section>
  </>;
}
