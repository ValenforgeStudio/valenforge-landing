// /src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.name,
  description: "Crafting helpful tech with a maker's heart.",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
  alternates: { canonical: siteUrl }, // ← canonical URL

  openGraph: {
    type: "website",
    title: site.name,
    description: "Crafting helpful tech with a maker's heart.",
    images: [
      {
        url: "/images/valenforge_primary_dark.png",
        width: 1200,
        height: 630,
        alt: "Valenforge Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Crafting helpful tech with a maker's heart.",
    images: ["/images/valenforge_primary_dark.png"],
  },
};

// /src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: siteUrl,
    name: site.name,
    logo: new URL("/images/valenforge_primary_dark.png", siteUrl).toString(),
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer support", email: site.email },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Site-wide ambient glow layer (behind all content) */}
        <div
  aria-hidden
  className="pointer-events-none absolute inset-0 -z-10 h-full"
  style={{
    background: `
      /* Fades to base near the page bottom */
      linear-gradient(to bottom, transparent 0%, transparent 70%, var(--bg) 100%),

      /* Larger glows so they carry further down */
      radial-gradient(1200px 640px at 18% -12%, color-mix(in srgb, var(--forest) 26%, transparent), transparent 72%),
      radial-gradient(1100px 560px at 102% -10%, color-mix(in srgb, var(--gold) 18%, transparent), transparent 76%)
    `,
  }}
/>
        {children}
      </body>
    </html>
  );
}

