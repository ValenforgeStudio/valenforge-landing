"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";


export default function SiteHeader() {
const [open, setOpen] = useState(false);


// Close on hash change / navigation for good UX
useEffect(() => {
const handler = () => setOpen(false);
window.addEventListener("hashchange", handler);
return () => window.removeEventListener("hashchange", handler);
}, []);


return (
<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
{/* Skip link for accessibility */}
<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-neutral-900 text-neutral-100 px-3 py-2 rounded">Skip to content</a>


<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
<Link href="#" className="group flex items-center gap-2">
<Image src="/images/favicon.svg" alt="Valenforge mark" width={28} height={28} priority className="drop-shadow" />
<span className="font-medium tracking-wide group-hover:opacity-90">{site.name}</span>
</Link>


{/* Desktop nav */}
<nav className="hidden md:flex items-center gap-6 text-sm">
{site.nav.map((n) => (
<a key={n.id} href={`#${n.id}`} className="hover:text-neutral-200 text-neutral-300">
{n.label}
</a>
))}
<a href="#contact" className="rounded-2xl border border-white/15 px-3 py-1.5 text-neutral-100 hover:bg-white/5">Email</a>
</nav>


{/* Mobile menu button */}
<button
aria-label="Toggle navigation"
className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15"
onClick={() => setOpen((v) => !v)}
>
{/* simple icon without external libs */}
<div className="space-y-1.5">
<span className={`block h-0.5 w-5 bg-neutral-200 transition ${open ? "translate-y-2 rotate-45" : ""}`}></span>
<span className={`block h-0.5 w-5 bg-neutral-200 transition ${open ? "opacity-0" : ""}`}></span>
<span className={`block h-0.5 w-5 bg-neutral-200 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}></span>
</div>
</button>
</div>


{/* Mobile drawer */}
{open && (
<div className="md:hidden border-t border-white/10 bg-neutral-950">
<nav className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-sm">
{site.nav.map((n) => (
<a key={n.id} href={`#${n.id}`} className="rounded-lg px-2 py-2 hover:bg-white/5">
{n.label}
</a>
))}
<a href={`mailto:${site.email}`} className="rounded-lg px-2 py-2 hover:bg-white/5">Email: {site.email}</a>
</nav>
</div>
)}
</header>
);
}