import Image from "next/image";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <Section border="bottom" className="pt-16">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{site.name}</h1>
          <p className="mt-4 text-neutral-300 max-w-prose">{site.tagline}</p>
        </div>

        <div className="md:justify-self-end">
          <Image
            src="/images/valenforge_primary_dark.png"
            alt="Valenforge Studio logo"
            width={480}
            height={180}
            priority
            className="w-full h-auto max-w-[520px]"
          />
        </div>
      </div>
    </Section>
  );
}
