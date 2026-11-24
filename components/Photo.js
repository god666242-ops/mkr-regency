// Responsive photo. `src` is an image name such as "king-1": files are public/images/<name>-<width>.webp
// (made by scripts/optimize-images.py, sizes listed in image-manifest.json).
// Shows a quiet placeholder tile when src is empty.
import manifest from "../image-manifest.json";

export const imgSrcSet = (name) =>
  (manifest[name] || []).map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");

export const imgFallback = (name) => {
  const w = manifest[name] || [];
  const pick = w.find((x) => x >= 960) || w[w.length - 1];
  return `/images/${name}-${pick}.webp`;
};

export default function Photo({ src, alt, className = "", pos = "center", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }) {
  const empty =
    "grid place-items-center bg-gradient-to-br from-umber2 to-umber p-4 text-center font-fd text-base font-light italic text-white/55 ";
  return (
    <div className={"relative overflow-hidden bg-line " + (src ? "" : empty) + className}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgFallback(src)}
          srcSet={imgSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: pos }}
        />
      ) : (
        <span aria-hidden="true">{alt}</span>
      )}
    </div>
  );
}
