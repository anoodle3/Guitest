import { ArrowRight, CheckCircle2, Play, Video } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DemoVideo } from "../components/DemoVideo";
import { MediaGallery } from "../components/MediaGallery";
import { PageHero } from "../components/PageHero";
import { financeImages, telecomImages, videos } from "../lib/media";
import { cases } from "../lib/site-data";

const demoCases = [
  {
    category: "金融", title: "从交易关系中追踪可疑资金路径",
    description: "围绕示例账户与交易网络，结合节点重要性、环路检测与金额统计，呈现从业务问题到分析报告的完整链路。",
    question: "围绕某账户检查可疑资金流，列出潜在闭环交易路径，并估算异常资金规模。",
    input: "账户与交易日志，包含交易主体、资金流向与金额。",
    workflow: "理解问题 → PageRank 节点分析 → FindCycle 环路检测 → 金额与路径汇总。",
    output: "报告整理账户风险线索、资金路径与计算结果，并提供后续复核建议。",
    images: financeImages,
  },
  {
    category: "电信", title: "识别网络中的关键瓶颈基站",
    description: "把上网轨迹转换为基站迁移图，识别网络核心层与承载大量迁移路径的关键节点，为运维评估提供依据。",
    question: "识别全网关键瓶颈基站，说明识别依据，并给出扩容与流量卸载建议。",
    input: "用户上网轨迹，包含基站、接入时间、迁移关系与流量等属性。",
    workflow: "构建迁移图 → Core Number / K-Core 核心层分析 → Betweenness Centrality 瓶颈识别。",
    output: "样例中识别中山公园基站 B1240：Core Number 为 18，介数中心性为 0.1846，排名第 1。",
    images: telecomImages,
  },
];

export function CasesPage() {
  const [filter, setFilter] = useState("全部");
  const categories = ["全部", "金融", "电信", "医疗", "制造", "科研", "企业"];
  const visibleCases = filter === "全部" ? cases : cases.filter(item => item.category === filter);
  const visibleDemos = filter === "全部" ? demoCases : demoCases.filter(item => item.category === filter);
  const visibleVideos = filter === "全部" ? videos : videos.filter(video => video.category === filter);
  const videoScope = filter === "全部" ? "全部视频" : `${filter}演示`;
  return <>
    <PageHero eyebrow="INDUSTRY CASES & VIDEOS" title="把复杂关系，转化为可行动的洞察" description="通过金融交易与电信运维演示，查看易图如何理解问题、规划算法并呈现可追溯结果。" />
    <section className="section case-library"><div className="container">
      <div className="filter-bar case-filters" aria-label="案例分类筛选">{categories.map(item => <button className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
      <div className="case-detail-grid">{visibleCases.map(({ icon: Icon, category, title, text, result }, index) => <article className="case-detail" key={title}><div className="case-detail-top"><span>0{index + 1}</span><div className="case-icon"><Icon size={26} /></div></div><small>{category}</small><h2>{title}</h2><p>{text}</p><div className="case-result"><CheckCircle2 size={17} /><span>{result}</span></div><div className="case-lines" aria-hidden="true"><i/><i/><i/></div></article>)}</div>
    </div></section>
    {visibleDemos.length > 0 && <section className="section case-evidence grid-field"><div className="container">
      <div className="section-heading"><span className="eyebrow">PRODUCT IN PRACTICE</span><h2>把分析过程展开给你看</h2><p>以下为产品演示案例，展示界面、算法流程与样例结果。</p></div>
      {visibleDemos.map(demo => <article className="case-demo" key={demo.category}>
        <div className="case-demo-copy"><span className="eyebrow">{demo.category} · 演示案例</span><h3>{demo.title}</h3><p>{demo.description}</p><blockquote>{demo.question}</blockquote><dl><div><dt>输入数据</dt><dd>{demo.input}</dd></div><div><dt>分析流程</dt><dd>{demo.workflow}</dd></div><div><dt>示例输出</dt><dd>{demo.output}</dd></div></dl></div>
        <MediaGallery images={demo.images} label={`${demo.category}演示`} />
      </article>)}
    </div></section>}
    <section className="section industry-video-library grid-field"><div className="container">
      <div className="section-heading row-heading"><div><span className="eyebrow">INDUSTRY VIDEOS</span><h2>行业应用视频</h2><p>从图数据查看到分析结果，用操作录屏了解实际工作流。</p></div><div className="industry-video-count"><Video size={17}/><span>{videoScope}</span><strong>{visibleVideos.length} 个视频</strong></div></div>
      {visibleVideos.length > 0 ? <div className="industry-video-grid">{visibleVideos.map(video => <article className="industry-video-card" key={video.file}><DemoVideo video={video}/><div className="industry-video-copy"><small>{video.category} · 产品演示</small><h3>{video.title}</h3><p>{video.description}</p></div></article>)}</div> : <div className="industry-video-empty"><div className="industry-video-visual" aria-hidden="true"><div className="video-reserve-grid"/><div className="video-reserve-orbit"><i/><i/><i/><i/></div><span><Play size={26} fill="currentColor"/></span></div><div className="industry-video-empty-copy"><span className="eyebrow">VIDEO LIBRARY</span><h3>{videoScope}视频正在筹备</h3><p>{filter === "电信" ? "可先通过上方的界面与样例报告了解关键基站分析流程。" : "可以先了解上方应用场景，或查看金融分析录屏。"}</p><button type="button" className="button button-secondary" onClick={() => setFilter("金融")}>查看金融演示 <ArrowRight size={16}/></button></div></div>}
    </div></section>
    <section className="workflow-band grid-field"><div className="container"><div className="section-heading centered"><span className="eyebrow">ONE WORKFLOW, MANY DOMAINS</span><h2>统一能力，适配不同业务语境</h2></div><div className="workflow-steps">{[["01","接入","整合业务数据"],["02","理解","解析行业问题"],["03","分析","调用图算法"],["04","交付","生成可追溯报告"]].map(([n,t,d]) => <div key={n}><span>{n}</span><strong>{t}</strong><small>{d}</small></div>)}</div></div></section>
    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">TAILORED SOLUTION</span><h2>讨论你的图数据分析场景</h2></div><Link className="button button-primary" to="/contact">联系我们，交流分析需求 <ArrowRight size={17}/></Link></div></section>
  </>;
}
