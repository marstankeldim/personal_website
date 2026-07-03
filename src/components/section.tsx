import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/** Numbered page section with a mono index label and hairline rule. */
export function Section({
  index,
  title,
  children,
  className = "",
}: {
  index?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-line py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-4 md:mb-14">
            {index && <span className="microlabel">{index}</span>}
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Standard page hero: mono kicker, display title, lede paragraph. */
export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
      <Reveal>
        <p className="microlabel">{kicker}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {lede}
          </p>
        )}
      </Reveal>
    </div>
  );
}

/** A word set in the serif italic accent face. */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif italic text-accent">{children}</em>;
}
