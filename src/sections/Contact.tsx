import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <Section id="contact" border={false}>
      <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>

      {/* Forged accent: gold → forest → fade */}
      <div
        aria-hidden
        className="mt-2 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--gold) 38%, transparent), color-mix(in srgb, var(--forest) 28%, transparent) 35%, transparent 75%)",
        }}
      />

      <p className="mt-4 text-neutral-300 max-w-prose leading-relaxed">
        Support &amp; feedback:
      </p>

      <div className="mt-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center rounded-2xl border border-[var(--border)]/80 px-4 py-2 hover:bg-white/5"
          aria-label={`Email ${site.email}`}
        >
          {site.email}
        </a>
      </div>
    </Section>
  );
}
