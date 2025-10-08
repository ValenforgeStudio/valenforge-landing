import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  border?: "top" | "bottom" | false;
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export default function Section({
  id,
  children,
  className,
  border = "bottom",
}: SectionProps) {
  const borderCls =
  border === "bottom"
    ? "border-b border-[var(--border)]"
    : border === "top"
    ? "border-t border-[var(--border)]"
    : "";

  return (
    <section id={id} className={cx("mx-auto max-w-6xl px-4 py-16 md:py-24", borderCls, className)}>
      {children}
    </section>
  );
}
