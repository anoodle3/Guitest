import { ExternalLink, Monitor, RefreshCw, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

type PreviewMode = "desktop" | "mobile";

const previewPages = [
  ["首页", "/"],
  ["产品功能", "/product"],
  ["行业案例", "/cases"],
  ["技术资源", "/resources"],
  ["关于我们", "/about"],
  ["联系我们", "/contact"],
];

function PreviewSwitch({ mode, onChange }: { mode: PreviewMode; onChange: (mode: PreviewMode) => void }) {
  return <div className="preview-switch" role="group" aria-label="设备预览切换">
    <button className={mode === "desktop" ? "active" : ""} onClick={() => onChange("desktop")} aria-pressed={mode === "desktop"} title="电脑预览">
      <Monitor size={18} />
    </button>
    <button className={mode === "mobile" ? "active" : ""} onClick={() => onChange("mobile")} aria-pressed={mode === "mobile"} title="手机预览">
      <Smartphone size={18} />
    </button>
  </div>;
}

function PreviewToolbar({ mode, currentPath, onModeChange }: { mode: PreviewMode; currentPath: string; onModeChange: (mode: PreviewMode) => void }) {
  const openNewWindow = () => window.open(pageUrl(currentPath), "_blank", "noopener,noreferrer");
  return <header className="preview-toolbar">
    <div className="preview-toolbar-brand"><img src={`${import.meta.env.BASE_URL}yigraph-logo.png`} alt="" /><strong>YiGraph 官方网站</strong></div>
    <PreviewSwitch mode={mode} onChange={onModeChange} />
    <label className="preview-route-select">
      <span>YiGraph</span><i>/</i>
      <select value={currentPath} onChange={(event) => router.navigate(event.target.value)} aria-label="选择预览页面">
        {previewPages.map(([label, path]) => <option value={path} key={path}>{label}</option>)}
      </select>
    </label>
    <div className="preview-toolbar-actions">
      <button onClick={openNewWindow} title="在新窗口打开"><ExternalLink size={18} /><span>新窗口打开</span></button>
      <button onClick={() => window.location.reload()} title="刷新预览"><RefreshCw size={18} /><span>刷新</span></button>
    </div>
  </header>;
}

function pageUrl(path: string, embedded = false) {
  const url = new URL(window.location.href);
  url.searchParams.delete("embedded");
  if (embedded) url.searchParams.set("embedded", "1");
  url.hash = path;
  return url.href;
}

export function App() {
  const embedded = new URLSearchParams(window.location.search).get("embedded") === "1";
  const preview = import.meta.env.DEV || new URLSearchParams(window.location.search).get("preview") === "1";
  const [mode, setMode] = useState<PreviewMode>("desktop");
  const [currentPath, setCurrentPath] = useState(router.state.location.pathname);

  useEffect(() => {
    return router.subscribe((state) => setCurrentPath(state.location.pathname));
  }, []);

  if (embedded || !preview) return <RouterProvider router={router} />;

  return <div className={`device-preview device-preview-${mode}`}>
    <PreviewToolbar mode={mode} currentPath={currentPath} onModeChange={setMode} />
    {mode === "desktop" ? <RouterProvider router={router} /> : <div className="mobile-preview-stage">
      <div className="mobile-preview-label"><span>YiGraph</span><small>手机端预览</small></div>
      <iframe className="mobile-preview-frame" title="YiGraph 手机端预览" src={pageUrl(currentPath, true)} />
    </div>}
  </div>;
}
