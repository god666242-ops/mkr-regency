import { hotel as h, site as s } from "../site";
import Widget from "../components/Widget";
import Photo, { imgSrcSet, imgFallback } from "../components/Photo";
import Faq from "../components/Faq";
import Gallery from "../components/Gallery";

const phone = h.phones[0];
const left = [["Suites", "suites"], ["Amenities", "amenities"], ["Gallery", "gallery"]];
const right = [...(s.nearby.length ? [["Around", "nearby"]] : []), ["FAQ", "faq"], ["Contact", "contact"]];
const nav = [...left, ...right];

const WRAP = "mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28";
const H2 = "font-fd text-[clamp(34px,4.6vw,58px)] font-light leading-[1.08] tracking-[-0.01em]";
const LINK = "underline decoration-goldlt underline-offset-[6px]";

export default function Page() {
  return (
    <>
      {/* Hero: full-screen, reservation strip at the foot */}
      <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-umber bg-dusk text-white">
        {s.heroImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgFallback(s.heroImg)}
            srcSet={imgSrcSet(s.heroImg)}
            sizes="100vw"
            alt={h.full}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-umber/70 via-umber/20 to-umber/90" />

        <header className="relative mx-auto grid w-full max-w-[1240px] gap-4 px-6 pt-7 md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10">
          <nav aria-label="Primary" className="hidden gap-8 text-[15px] md:flex">
            {left.map(([t, id]) => (
              <a key={id} href={"#" + id} className="text-white/80 hover:text-white">{t}</a>
            ))}
          </nav>
          <a href="#top" aria-label={h.full} className="flex items-center gap-3 justify-self-start md:justify-self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mark-light.png" alt="" width="52" height="40" className="h-10 w-auto" />
            <span className="font-fd text-[22px] font-light uppercase tracking-[0.2em]">{h.name}</span>
          </a>
          <nav aria-label="Secondary" className="flex gap-6 overflow-x-auto whitespace-nowrap text-[15px] md:justify-end md:gap-8">
            <span className="flex gap-6 md:hidden">
              {left.map(([t, id]) => (
                <a key={id} href={"#" + id} className="text-white/80 hover:text-white">{t}</a>
              ))}
            </span>
            {right.map(([t, id]) => (
              <a key={id} href={"#" + id} className="text-white/80 hover:text-white">{t}</a>
            ))}
          </nav>
        </header>

        <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-end px-6 pb-12 pt-24 md:px-10 md:pb-16">
          <div className="motion-safe:animate-fade">
            <p className="text-lg text-goldlt">{h.locality}, {h.region}</p>
            <h1 className="mt-3 max-w-[12ch] font-fd text-[clamp(60px,10.5vw,148px)] font-light leading-[0.94] tracking-[-0.02em]">
              {h.full}
            </h1>
            <p className="mt-6 max-w-[44ch] text-[19px] text-white/80">{s.lead}</p>
          </div>
          <div>
            <div className="mt-9 flex max-w-[580px] flex-wrap items-center justify-between gap-x-6 gap-y-4 bg-white px-6 py-5 text-ink">
              <div>
                <b className="block font-fd text-[24px] font-normal text-umber">Reserve your stay</b>
                <span className="text-sm text-mut">Live rates. Book direct with the hotel.</span>
              </div>
              <Widget />
            </div>
            {phone && (
              <a href={`tel:${phone.tel}`} className={`mt-5 inline-block font-medium text-white ${LINK}`}>
                Or call {phone.show}
              </a>
            )}
          </div>
        </div>

      </section>

      {/* Introduction */}
      <section className={`${WRAP} grid items-center gap-14 md:grid-cols-[5fr_7fr] md:gap-24`}>
        <Photo src={s.introImg} alt="Mirror and greenery in a suite" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] w-full" />
        <div>
          <h2 className={`${H2} text-umber`}>{s.headline}</h2>
          <p className="mt-8 max-w-[52ch] text-[19px] text-mut">{s.intro}</p>
          <dl className="mt-10 grid max-w-[520px] gap-x-10 border-t border-line sm:grid-cols-2">
            <div className="border-b border-line py-4">
              <dt className="text-sm text-mut">Rated</dt>
              <dd className="font-fd text-[30px] font-light text-umber">{s.rating.score}</dd>
              <dd className="text-sm text-mut">{s.rating.note}</dd>
            </div>
            <div className="border-b border-line py-4">
              <dt className="text-sm text-mut">Address</dt>
              <dd className="mt-1 text-[15px] leading-snug text-ink">{h.address}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Suites */}
      <section className="bg-sand/50" id="suites">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[16ch] text-umber`}>Rooms and suites</h2>
          <p className="mt-5 max-w-[52ch] text-mut">See live rates and availability for each in the booking window.</p>
          <div className="mt-16 grid gap-20 md:gap-28">
            {s.rooms.map((r, i) => (
              <article key={r.name} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <Photo src={r.img} alt={r.name} pos={r.pos} sizes="(min-width: 768px) 58vw, 100vw" className="aspect-[16/11] w-full" />
                  {r.more?.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:gap-4">
                      {r.more.map(([src, alt]) => (
                        <Photo key={src} src={src} alt={alt} sizes="(min-width: 768px) 29vw, 50vw" className="aspect-[4/3] w-full" />
                      ))}
                    </div>
                  )}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-fd text-[clamp(30px,3.4vw,44px)] font-light leading-tight text-umber">{r.name}</h3>
                  <p className="mt-2 text-gold">{r.bed}</p>
                  <p className="mt-5 text-mut">{r.desc}</p>
                  <ul className="mt-6 border-t border-line">
                    {r.perks.map((p) => (
                      <li key={p} className="border-b border-line py-2.5 text-[15px]">{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20">
            <Widget label="Check rates and book" />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-umber text-white" id="amenities">
        <div className={`${WRAP} grid gap-12 md:grid-cols-[4fr_8fr] md:gap-20`}>
          <h2 className={`${H2} max-w-[10ch]`}>Little things, done well</h2>
          <ul className="grid gap-x-14 sm:grid-cols-2">
            {s.amenities.map(([t, d]) => (
              <li key={t} className="border-t border-white/20 py-5">
                <b className="block font-fd text-[22px] font-normal">{t}</b>
                <span className="text-[15px] text-white/65">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className={WRAP} id="gallery">
        <h2 className={`${H2} text-umber`}>A look inside</h2>
        <Gallery items={s.gallery} />
      </section>

      {/* Around */}
      {s.nearby.length > 0 && (
        <section className="bg-sand/50" id="nearby">
          <div className={WRAP}>
            <h2 className={`${H2} text-umber`}>Around {h.locality}</h2>
            <p className="mt-5 max-w-[52ch] text-mut">Distances from {h.full}.</p>
            <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
              {s.nearby.map(([place, dist]) => (
                <li key={place} className="flex items-baseline justify-between gap-6 border-t border-line py-4">
                  <span className="font-medium text-ink">{place}</span>
                  <em className="whitespace-nowrap font-fd text-[24px] font-light not-italic text-umber">{dist}</em>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={`${WRAP} max-w-[900px]`} id="faq">
        <h2 className={`${H2} mb-12 text-umber`}>Questions guests ask</h2>
        <Faq items={s.faq} />
      </section>

      {/* Contact */}
      <section className="bg-sand/50" id="contact">
        <div className={`${WRAP} grid gap-12 md:grid-cols-[4fr_8fr] md:gap-20`}>
          <div>
            <h2 className={`${H2} text-umber`}>Find us</h2>
            <p className="mt-8 text-[19px] text-ink">{h.full}</p>
            <p className="mt-1 text-mut">{h.address}</p>
            <div className="mt-6 flex flex-col gap-2 font-medium text-umber">
              {h.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className={LINK}>Call {p.show}</a>
              ))}
              {h.email && <a href={`mailto:${h.email}`} className={LINK}>{h.email}</a>}
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapQuery)}`} target="_blank" rel="noopener noreferrer" className={LINK}>
                Get directions
              </a>
            </div>
          </div>
          <div className="min-h-[380px] overflow-hidden border border-line [&_iframe]:block [&_iframe]:h-full [&_iframe]:min-h-[380px] [&_iframe]:w-full [&_iframe]:border-0">
            <iframe
              title={`Map of ${h.full}`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(h.mapQuery)}&output=embed`}
            />
          </div>
        </div>
      </section>

      {/* Closing reservation */}
      <section className="bg-umber bg-dusk text-center text-white">
        <div className={`${WRAP} flex flex-col items-center`}>
          <p className="mb-4 font-fd text-xl italic text-goldlt">{s.tagline}</p>
          <h2 className={`${H2} max-w-[16ch]`}>Your room is waiting</h2>
          <p className="mb-9 mt-5 max-w-[44ch] text-white/75">Choose your dates and book your stay at {h.name}.</p>
          <div className="rounded-[4px] bg-white p-5">
            <Widget />
          </div>
        </div>
      </section>

      <footer className="bg-umber text-white/70">
        <div className="mx-auto grid max-w-[1240px] gap-6 border-t border-white/15 px-6 py-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:px-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-light.png" alt={h.full} width="220" height="170" className="h-auto w-[200px]" />
            <p className="mt-4 text-[15px]">{h.address}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {nav.map(([t, id]) => (
              <a key={id} href={"#" + id} className="hover:text-white">{t}</a>
            ))}
          </nav>
          <div>
            <small>© {new Date().getFullYear()} {h.full}</small>
            <nav aria-label="Legal" className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
              <a href="/terms" className="hover:text-white">Terms &amp; Conditions</a>
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
