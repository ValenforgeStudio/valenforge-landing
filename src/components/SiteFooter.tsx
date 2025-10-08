import Link from "next/link";
import { site } from "@/lib/site";


export default function SiteFooter() {
const year = new Date().getFullYear();
return (
<footer className="border-t border-white/10 bg-neutral-950">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span>© {year} {site.name}</span>
</div>
<div className="flex items-center gap-4">
{site.nav.map((n) => (
<a key={n.id} href={`#${n.id}`} className="hover:text-neutral-200">
{n.label}
</a>
))}
<Link href={`mailto:${site.email}`} className="hover:text-neutral-200">{site.email}</Link>
</div>
</div>
</footer>
);
}