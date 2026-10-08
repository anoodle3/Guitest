import { ArrowRight, Braces, DatabaseZap, ExternalLink, GraduationCap, Network, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { externalLinks } from "../lib/site-data";

const milestones = [["方向","面向复杂关系分析","从金融交易、企业关联和电信运维等问题出发，降低图分析的使用门槛。"],["方法","分析增强生成 AAG","结合大模型的语言理解与任务规划，以及图算法的确定性计算。"],["原型","易图 YiGraph","构建自然语言提问、DAG 编排、算法执行与报告生成的产品工作流。"],["开放","代码、文档与研究","通过开源代码、用户手册和 AAG 论文提供进一步了解与验证的入口。"]];
const teamRoles = [
  { icon: GraduationCap, label: "RESEARCH", title: "学术研究与项目指导", text: "负责研究方向、方法设计与学术成果质量，推动图智能研究与真实分析需求结合。" },
  { icon: DatabaseZap, label: "GRAPH SYSTEM", title: "图数据与算法研究", text: "聚焦图数据管理、算法编排、结果验证与可追溯分析链路。" },
  { icon: Braces, label: "ENGINEERING", title: "智能系统工程", text: "负责大语言模型交互、系统实现、可视化体验与开放资源建设。" },
];

export function AboutPage() {
  return <>
    <PageHero eyebrow="ABOUT IDC LAB" title="从可信研究出发，构建实用的图智能系统" description="YiGraph 由东北大学 iDC 实验室研发，聚焦智能数据计算、图数据管理与大语言模型融合研究。">
      <div className="lab-seal"><span>iDC</span><small>INTELLIGENT<br/>DATA COMPUTING</small></div>
    </PageHero>
    <section className="section lab-intro"><div className="container lab-intro-grid"><div><span className="eyebrow">THE LAB</span><h2>东北大学<br/>iDC 实验室</h2></div><div><p className="lead">我们关注数据、算法与人的协作方式，致力于将前沿研究转化为可使用、可验证的智能数据系统。</p><p>实验室围绕图数据管理与分析、知识图谱、大语言模型和智能数据计算持续开展研究。YiGraph 是这些研究方向在复杂关系分析场景中的系统化实践。</p><div className="research-tags"><span><Network size={17}/>图数据智能</span><span><GraduationCap size={17}/>大语言模型</span><span><Users size={17}/>人机协同分析</span></div></div></div></section>
    <section className="section team-section"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">THE TEAM</span><h2>跨研究方向协作的研发团队</h2></div><p>YiGraph 由东北大学 iDC 实验室团队共同研发。团队围绕图数据管理、图计算与大模型协同分析开展研究与系统建设。</p></div><div className="team-grid">{teamRoles.map(({icon:Icon,label,title,text},index)=><article className="team-card" key={title}><div className="team-card-head"><span>0{index+1}</span><Icon size={24}/></div><small>{label}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="timeline-section grid-field"><div className="container"><div className="section-heading"><span className="eyebrow">RESEARCH TO PRODUCT</span><h2>从研究方法到产品工作流</h2></div><div className="timeline">{milestones.map(([year,title,text]) => <article key={year}><span>{year}</span><i/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="section academic-section"><div className="container"><div className="section-heading row-heading"><div><span className="eyebrow">ACADEMIC OUTPUT</span><h2>以公开成果接受检验</h2></div><a className="text-link" href={externalLinks.paper} target="_blank" rel="noreferrer">查看论文 <ExternalLink size={16}/></a></div><article className="paper-card"><span>AAG · 2026</span><h3>Towards Autonomous Graph Data Analytics with Analytics-Augmented Generation</h3><p>围绕自然语言驱动图分析的系统设计、核心方法与评估结果，呈现 YiGraph 的完整研究工作。</p><a href={externalLinks.paper} target="_blank" rel="noreferrer">arXiv:2602.21604 <ArrowRight size={16}/></a></article></div></section>
    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">BUILD WITH US</span><h2>了解项目，参与开放协作</h2></div><div><a className="button button-primary" href={externalLinks.github} target="_blank" rel="noreferrer">访问 GitHub <ExternalLink size={17}/></a><Link className="button button-secondary" to="/contact">联系团队</Link></div></div></section>
  </>;
}
