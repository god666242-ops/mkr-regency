import "./globals.css";
import Script from "next/script";
import { Newsreader, Jost } from "next/font/google";
import { hotel, site } from "../site";
import Seo from "../components/Seo";

const display = Newsreader({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--fd", display: "swap" });
const body = Jost({ subsets: ["latin"], variable: "--fb", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | MKR Regency" },
  description: site.description,
  applicationName: hotel.full,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: hotel.full, title: site.title, description: site.description, locale: "en_IN", images: [{ url: site.ogImg, width: 1600, height: 1067, alt: hotel.full }] },
  robots: { index: true, follow: true },
  other: { "geo.region": "IN-AP", "geo.placename": hotel.locality },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#231b11" };

export default function Layout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth scroll-pt-6">
      <head>
        <link rel="preconnect" href="https://cdn.purebook.in" crossOrigin="" />
      </head>
      <body className={`${display.variable} ${body.variable} bg-pearl font-fb text-[17px] leading-[1.7] text-ink antialiased`}>
        {children}
        <Seo hotel={hotel} site={site} />
        <Script src="https://cdn.purebook.in/engine.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
