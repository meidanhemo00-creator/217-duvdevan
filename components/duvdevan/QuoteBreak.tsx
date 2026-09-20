import { Reveal } from "@/components/duvdevan/Reveal";

export function QuoteBreak({
  quote,
  attribution,
  tone = "dark",
}: {
  quote: string;
  attribution?: string;
  tone?: "dark" | "paper";
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={`${isDark ? "ground-dark" : "ground-paper"} relative py-20 md:py-28`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-14">
        <Reveal>
          <span className={`chapter-bar mx-auto mb-8 block h-px w-10`} />
          <p
            className={`font-display text-2xl italic leading-snug sm:text-3xl md:text-4xl ${
              isDark ? "text-paper/90" : "text-ink/85"
            }`}
          >
            &ldquo;{quote}&rdquo;
          </p>
          {attribution && (
            <p
              className={`font-display mt-8 text-xs uppercase tracking-[0.2em] ${
                isDark ? "text-paper/45" : "text-ink/50"
              }`}
            >
              {attribution}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
