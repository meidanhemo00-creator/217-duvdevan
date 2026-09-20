import { Container } from "@/components/Container";
import { OFFICIAL_SITE_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-ink py-10">
      <Container className="flex flex-col items-center gap-5 text-center">
        <a
          href={OFFICIAL_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display border border-paper/25 px-6 py-3 text-xs uppercase tracking-[0.2em] text-paper/80 transition-colors hover:border-paper hover:text-paper"
        >
          Visit Friends of Duvdevan — duvdevanus.org
        </a>
        <span className="font-display text-sm uppercase tracking-[0.3em] text-paper/70">
          Friends of Duvdevan
        </span>
        <span className="font-body text-xs text-paper/40">
          © 2026 Friends of Duvdevan. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}
