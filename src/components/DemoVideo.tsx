import { financeDemo, mediaUrl, type DemoVideoItem } from "../lib/media";

export function DemoVideo({ video = financeDemo }: { video?: DemoVideoItem }) {
  return <div className="demo-video">
    <video controls playsInline preload="metadata" poster={mediaUrl(video.poster)} aria-label={video.title}>
      <source src={mediaUrl(video.file)} type="video/mp4" />
      你的浏览器不支持视频播放。<a href={mediaUrl(video.file)}>下载演示视频</a>
    </video>
    <div className="demo-video-caption"><span>{video.category}演示 · {video.duration}</span><a href={mediaUrl(video.file)} download={`yigraph-${video.file}`}>下载录屏</a></div>
  </div>;
}
