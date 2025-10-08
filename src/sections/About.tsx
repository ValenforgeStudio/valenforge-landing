import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-semibold">About</h2>

      {/* Forged accent: a 1px gradient line (gold → forest → fade) */}
      <div
        aria-hidden
        className="mt-2 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--gold) 38%, transparent), color-mix(in srgb, var(--forest) 28%, transparent) 35%, transparent 75%)",
        }}
      />

      <p className="mt-4 text-neutral-300 max-w-prose leading-relaxed">
        Valenforge Studio is a small software studio. We build focused, durable web tools.
        This site is an information page for current and future users.
      </p>
    </Section>
  );
}
