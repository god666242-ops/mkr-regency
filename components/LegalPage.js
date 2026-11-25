import Link from "next/link";
import { hotel as h } from "../site";

// Shared layout for the Terms & Conditions and Privacy Policy pages.
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <header className="border-b border-line bg-pearl">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="font-fd text-2xl text-umber">
            {h.full}
          </Link>
          <Link href="/" className="text-[15px] text-mut hover:text-ink">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-6 py-14 md:px-8 md:py-20">
        <h1 className="font-fd text-[clamp(36px,5vw,56px)] font-light leading-[1.08] text-umber">{title}</h1>
        <p className="mt-3 text-sm text-mut">Last updated: {updated}</p>
        <p className="mt-6 text-mut">{intro}</p>

        {sections.map((sec, i) => (
          <section key={sec.h} className="mt-10">
            <h2 className="font-fd text-[28px] font-light text-umber">
              {i + 1}. {sec.h}
            </h2>
            {sec.p?.map((t) => (
              <p key={t} className="mt-3 text-mut">{t}</p>
            ))}
            {sec.ul && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-mut marker:text-gold">
                {sec.ul.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-12 border border-line bg-sand p-7">
          <h2 className="font-fd text-[28px] font-light text-umber">Contact us</h2>
          <p className="mt-2 text-mut">Questions about this page? Call or visit us.</p>
          <p className="mt-4 font-medium text-ink">{h.full}</p>
          <p className="text-mut">{h.address}</p>
          {h.phones.length > 0 && (
            <p className="mt-2">
              {h.phones.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && " / "}
                  <a href={`tel:${p.tel}`} className="text-gold underline decoration-goldlt underline-offset-4">{p.show}</a>
                </span>
              ))}
            </p>
          )}
          {h.email && (
            <p className="mt-1">
              <a href={`mailto:${h.email}`} className="text-gold underline decoration-goldlt underline-offset-4">{h.email}</a>
            </p>
          )}
        </section>
      </main>

      <footer className="bg-umber text-white/70">
        <div className="mx-auto flex max-w-[860px] flex-col items-start justify-between gap-3 border-t border-white/15 px-6 py-8 text-[15px] sm:flex-row sm:items-center md:px-8">
          <small>© {new Date().getFullYear()} {h.full}</small>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
