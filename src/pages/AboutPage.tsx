import { ArrowRight, Award, ExternalLink, GraduationCap, Network, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { externalLinks } from "../lib/site-data";

const milestones = [
  { year: "2025", title: "项目启动", text: "探索以自然语言驱动图数据分析的产品与研究方向。" },
  { year: "2025", title: "核心功能开发完成", text: "打通数据构图、任务规划、图算法执行与报告生成流程。" },
  { year: "2026", title: "YiGraph 论文投稿", text: "阐述 LLM 与确定性图算法融合的方法论。" },
  { year: "2026", title: "开源与行业应用", text: "开源代码发布，用户手册上线，开始行业应用推广。" },
];

export function AboutPage() {
  return <>
    <PageHero eyebrow="ABOUT IDC LAB" title="关于我们" description="YiGraph 由东北大学 iDC 实验室自主研发，致力于将前沿 AI 技术应用于图数据分析领域。">
      <div className="lab-seal"><span>iDC</span><small>INTELLIGENT DISTRIBUTED<br/>COMPUTING</small></div>
    </PageHero>
    <section className="section about-lab-section"><div className="container"><div className="about-lab-card">
      <div className="about-lab-copy"><span className="eyebrow">THE LAB · WE BUILD DATA SYSTEMS</span><h2>实验室介绍</h2>
        <p className="lead">iDC（Intelligent Distributed Computing）实验室隶属于东北大学，由张岩峰教授担任负责人。我们专注于数据系统方向的研究，将学术研究成果转化为实际可用的技术工具，降低先进技术的使用门槛。</p>
        <p>研究涵盖大模型与数据智能体，包括图数据智能体、大模型 RAG、KV Cache 管理与扩散模型；AI Infra，包括分布式机器学习、昇腾 NPU 训练推理加速与 GNN 系统；以及分布式数据库、向量数据库、图数据库和云原生数据库等数据系统。</p>
        <p>YiGraph 是实验室在图数据智能分析领域的重要成果，将大语言模型的语义理解能力与确定性图算法深度融合，为业务人员提供自然语言驱动的图分析解决方案。</p>
      </div>
      <dl className="about-lab-facts">
        <div><dt><Network size={19}/>研究方向</dt><dd>大模型与数据智能体 · AI Infra · 数据系统</dd></div>
        <div><dt><GraduationCap size={19}/>实验室负责人</dt><dd>张岩峰 教授</dd></div>
        <div><dt><Server size={19}/>所属机构</dt><dd>东北大学</dd></div>
      </dl>
    </div></div></section>
    <section className="section about-history grid-field"><div className="container"><div className="section-heading centered"><span className="eyebrow">RESEARCH TO PRODUCT</span><h2>发展历程</h2><p>从研究探索到开放产品，让图智能走向实际应用。</p></div>
      <ol className="about-timeline">{milestones.map(({year,title,text}) => <li key={title}><span className="about-timeline-dot" aria-hidden="true"/><article><span>{year}</span><h3>{title}</h3><p>{text}</p></article></li>)}</ol>
    </div></section>
    <section className="section academic-section"><div className="container"><div className="section-heading centered"><span className="eyebrow">ACADEMIC ACHIEVEMENTS</span><h2>学术成果与获奖</h2><p>以研究积累支撑系统创新。</p></div>
      <div className="about-awards"><article><Award size={27}/><div><h3>国际会议论文奖 1 项</h3><p>Best of VLDB 2025</p></div></article><article><Award size={27}/><div><h3>中国计算机学会自然科学二等奖</h3><p>2023 年 CCF 科技成果奖</p></div></article></div>
      <article className="paper-card"><span>YIGRAPH · AAG · 2026</span><h3>Towards Autonomous Graph Data Analytics with Analytics-Augmented Generation</h3><p>围绕自然语言驱动图分析的系统设计、核心方法与评估结果，呈现 YiGraph 的研究工作。</p><a href={externalLinks.paper} target="_blank" rel="noreferrer">阅读 YiGraph 论文 <ArrowRight size={16}/></a></article>
    </div></section>
    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">BUILD WITH US</span><h2>加入开源社区</h2><p>了解项目，参与开放协作。</p></div><div><a className="button button-primary" href={externalLinks.github} target="_blank" rel="noreferrer">访问 GitHub <ExternalLink size={17}/></a><Link className="button button-secondary" to="/contact">联系团队</Link></div></div></section>
  </>;
}
