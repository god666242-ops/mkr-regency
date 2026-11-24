"use client";
import { useState, useEffect, useCallback } from "react";
import Photo, { imgSrcSet, imgFallback } from "./Photo";

const SPAN = { big: "col-span-2 row-span-2", wide: "col-span-2", tall: "row-span-2" };

export default function Gallery({ items }) {
  const cats = ["All", ...Array.from(new Set(items.map((g) => g.cat).filter(Boolean)))];
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = cat === "All" ? items : items.filter((g) => g.cat === cat);
  const n = shown.length;

  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, step]);

  const cur = open !== null ? shown[open] : null;
  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={"border px-5 py-2 text-sm transition " + (cat === c ? "border-umber bg-umber text-white" : "border-line text-mut hover:border-umber hover:text-umber")}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4 md:gap-4">
        {shown.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setOpen(i)}
            aria-label={"Enlarge: " + g.alt}
            className={"group relative block cursor-zoom-in overflow-hidden text-left " + (cat === "All" ? SPAN[g.span] || "" : "")}
          >
            <Photo src={g.src} alt={g.alt} sizes={g.span === "big" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="h-full w-full transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-8 text-xs text-white opacity-0 transition group-hover:opacity-100">{g.alt}</span>
          </button>
        ))}
      </div>
      {cur && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={cur.alt} onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgFallback(cur.src)} srcSet={imgSrcSet(cur.src)} sizes="100vw" alt={cur.alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/80">{cur.alt} · {open + 1}/{n}</p>
          <button className="absolute right-5 top-4 text-4xl leading-none text-white" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 px-3 text-5xl text-white" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 px-3 text-5xl text-white" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </div>
  );
}
