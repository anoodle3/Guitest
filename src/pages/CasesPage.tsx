import { ArrowRight, CheckCircle2, ExternalLink, Play, Video } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DemoVideo } from "../components/DemoVideo";
import { MediaGallery } from "../components/MediaGallery";
import { PageHero } from "../components/PageHero";
import { financeImages, inspectionImages, manufacturingImages, telecomImages, videos } from "../lib/media";
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
    source: "https://mp.weixin.qq.com/s/ShZiothKsoCMWlfq7J6d-Q",
  },
  {
    category: "电信", title: "识别网络中的关键瓶颈基站",
    description: "把上网轨迹转换为基站迁移图，识别网络核心层与承载大量迁移路径的关键节点，为运维评估提供依据。",
    question: "识别全网关键瓶颈基站，说明识别依据，并给出扩容与流量卸载建议。",
    input: "用户上网轨迹，包含基站、接入时间、迁移关系与流量等属性。",
    workflow: "构建迁移图 → Core Number / K-Core 核心层分析 → Betweenness Centrality 瓶颈识别。",
    output: "样例中识别中山公园基站 B1240：Core Number 为 18，介数中心性为 0.1846，排名第 1。",
    images: telecomImages,
    source: "https://mp.weixin.qq.com/s/0naJlLwDbmtQcIPrmtn8vA",
  },
  {
    category: "制造", title: "从质量异常追溯故障根因与修复方案",
    description: "关联设备、传感器、控制记录与生产批次，在多轮对话中追踪异常原因、检索相似故障并整理处置建议。",
    question: "分析生产批次含水率异常的原因。以前有类似情况吗？现在应该如何修复？",
    input: "设备台账、传感器记录、PLC 控制、生产批次、质检结果与历史维修经验。",
    workflow: "构建工业关系图 → 关联子图分析 → 根因定位 → 相似故障检索 → 修复与验证方案。",
    output: "演示报告整理关键故障节点、影响路径、历史案例和修复建议，支持进一步复核与处置。",
    images: manufacturingImages,
    source: "https://mp.weixin.qq.com/s/MHcNQVf4rPhrEzVDzBEkLw",
  },
  {
    category: "纪检", title: "把分散文件中的资金与人员线索关联起来",
    description: "从多类业务文件中抽取实体和关系，围绕示例人员展开资金、资产与轨迹核查，并汇总为可追溯报告。",
    question: "生成示例人员疑似利益输送问题的初步核查报告。",
    input: "人员信息、银行交易、采购项目、财产登记和住宿记录等五类文件。",
    workflow: "多源文件构图 → 资金与人员关系分析 → 多跳路径搜索 → 资产和轨迹关联 → 初步核查报告。",
    output: "报告呈现演示数据中的可疑资金链、资产关联与轨迹证据，并列出后续核查建议。",
    images: inspectionImages,
    source: "https://mp.weixin.qq.com/s/KCK-uYPhIg3F3Tf6wMthMQ",
  },
];

const caseIds: Record<string, string> = {
  金融: "finance",
  电信: "telecom",
  制造: "manufacturing",
  纪检: "inspection",
  产品演示: "product",
};

const videoId = (file: string) => `video-${file.replace(/\.mp4$/, "")}`;

export function CasesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categories = ["全部", "金融", "电信", "制造", "纪检", "产品演示"];
  const filter = categories.find(category => caseIds[category] === searchParams.get("industry")) ?? "全部";
  useEffect(() => {
    const targetId = location.hash.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    const frame = requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
      target.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.key]);
  const visibleCases = filter === "全部" ? cases : cases.filter(item => item.category === filter);
  const visibleDemos = filter === "全部" ? demoCases : demoCases.filter(item => item.category === filter);
  const visibleVideos = filter === "全部" ? videos : videos.filter(video => video.category === filter);
  const videoScope = filter === "全部" ? "全部视频" : `${filter}演示`;
  return <>
    <PageHero eyebrow="INDUSTRY CASES & VIDEOS" title="把复杂关系，转化为可行动的洞察" description="通过金融、电信、工业制造与纪检核查 demo，查看易图如何从多源数据构图到生成可追溯分析报告。" />
    <section className="section case-library"><div className="container">
      <div className="filter-bar case-filters" aria-label="案例分类筛选">{categories.map(item => <button className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => navigate(item === "全部" ? "/cases" : `/cases?industry=${caseIds[item]}`, { replace: true })} key={item}>{item}</button>)}</div>
      <div className="case-detail-grid">{visibleCases.map(({ icon: Icon, category, title, text, result }, index) => <Link className="case-detail" to={`/cases${location.search}#case-${caseIds[category]}`} aria-label={`查看${category}案例：${title}`} key={title}><div className="case-detail-top"><span>0{index + 1}</span><div className="case-icon"><Icon size={26} /></div></div><small>{category}</small><h2>{title}</h2><p>{text}</p><div className="case-result"><CheckCircle2 size={17} /><span>{result}</span><ArrowRight className="case-jump-icon" size={18} aria-hidden="true" /></div><div className="case-lines" aria-hidden="true"><i/><i/><i/></div></Link>)}</div>
    </div></section>
    {visibleDemos.length > 0 && <section className="section case-evidence grid-field"><div className="container">
      <div className="section-heading"><span className="eyebrow">PRODUCT IN PRACTICE</span><h2>把分析过程展开给你看</h2><p>以下为产品演示案例，展示界面、算法流程与样例结果。</p></div>
      {visibleDemos.map(demo => <article className="case-demo" id={`case-${caseIds[demo.category]}`} tabIndex={-1} aria-label={`${demo.category}案例详情`} key={demo.category}>
        <div className="case-demo-copy"><span className="eyebrow">{demo.category} · 演示案例</span><h3>{demo.title}</h3><p>{demo.description}</p><blockquote>{demo.question}</blockquote><dl><div><dt>输入数据</dt><dd>{demo.input}</dd></div><div><dt>分析流程</dt><dd>{demo.workflow}</dd></div><div><dt>示例输出</dt><dd>{demo.output}</dd></div></dl><div className="case-demo-links"><Link className="text-link" to={`/cases${location.search}#${videoId(videos.find(video => video.category === demo.category)!.file)}`}><Play size={16}/>观看{demo.category}演示视频</Link><a className="text-link" href={demo.source} target="_blank" rel="noreferrer">阅读案例原文 <ExternalLink size={16}/></a></div></div>
        <MediaGallery images={demo.images} label={`${demo.category}演示`} />
      </article>)}
    </div></section>}
    <section className="section industry-video-library grid-field"><div className="container">
      <div className="section-heading row-heading"><div><span className="eyebrow">INDUSTRY VIDEOS</span><h2>行业应用视频</h2><p>从图数据查看到分析结果，用操作录屏了解实际工作流。</p></div><div className="industry-video-count"><Video size={17}/><span>{videoScope}</span><strong>{visibleVideos.length} 个视频</strong></div></div>
      {visibleVideos.length > 0 ? <div className="industry-video-grid">{visibleVideos.map(video => <article className="industry-video-card" id={videoId(video.file)} tabIndex={-1} aria-label={`${video.category}视频：${video.title}`} key={video.file}><DemoVideo video={video}/><div className="industry-video-copy"><small>{video.category} · 产品演示</small><h3>{video.title}</h3><p>{video.description}</p></div></article>)}</div> : null}
    </div></section>
    <section className="workflow-band grid-field"><div className="container"><div className="section-heading centered"><span className="eyebrow">ONE WORKFLOW, MANY DOMAINS</span><h2>统一能力，适配不同业务语境</h2></div><div className="workflow-steps">{[["01","接入","整合业务数据"],["02","理解","解析行业问题"],["03","分析","调用图算法"],["04","交付","生成可追溯报告"]].map(([n,t,d]) => <div key={n}><span>{n}</span><strong>{t}</strong><small>{d}</small></div>)}</div></div></section>
    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">TAILORED SOLUTION</span><h2>讨论你的图数据分析场景</h2></div><Link className="button button-primary" to="/contact">联系我们，交流分析需求 <ArrowRight size={17}/></Link></div></section>
  </>;
}
