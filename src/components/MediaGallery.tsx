import { useState } from "react";
import { DemoImage, mediaUrl } from "../lib/media";

export function MediaGallery({ images, label }: { images: DemoImage[]; label: string }) {
  const [active, setActive] = useState(0);
  const image = images[active];
  return <div className="media-gallery" aria-label={label}>
    <div className="gallery-steps" role="group" aria-label={`${label}步骤`}>
      {images.map((item, index) => <button type="button" key={item.file} aria-pressed={index === active} className={index === active ? "active" : ""} onClick={() => setActive(index)}><small>{String(index + 1).padStart(2, "0")}</small>{item.title}</button>)}
    </div>
    <figure>
      <a href={mediaUrl(image.file)} target="_blank" rel="noreferrer" aria-label={`查看大图：${image.title}`}><img src={mediaUrl(image.file)} alt={`${label}：${image.title}`} loading="lazy" /></a>
      <figcaption><p>{image.caption}</p><span>点击图片查看大图</span></figcaption>
    </figure>
  </div>;
}
