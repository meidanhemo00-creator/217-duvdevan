"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/duvdevan/Reveal";

const ALT_TEXT =
  "The book's memorial page: portraits and names of the fallen of the Duvdevan Unit, Duvdevan alumni who fell in Israel's wars, and Duvdevan alumni who were victims of terror, presented exactly as printed";

export function Memorial() {
  const [open, setOpen] = useState(false);

  return (
    <section id="memorial" className="ground-dark relative py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="chapter-bar h-px w-10" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-red-bright">In Memory</span>
            <span className="chapter-bar h-px w-10" />
          </div>
          <h2 className="font-display text-3xl uppercase leading-[1.08] text-paper sm:text-4xl md:text-5xl">
            In Memory of the Unit&rsquo;s Fallen
          </h2>
          <p className="font-body mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
            They belong not only to the unit&rsquo;s past. They are part of its identity,
            the path it has taken, and the meaning it continues to carry today.
          </p>
        </Reveal>

        <Reveal delayMs={150}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative mx-auto block w-full overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-red-alert"
            aria-label="Open the memorial page at full size"
          >
            <Image
              src={withBasePath("/photos/duvdevan/memorial/memorial-wall.webp")}
              alt={ALT_TEXT}
              width={2600}
              height={1838}
              className="h-auto w-full"
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="font-display mb-4 border border-paper/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-paper sm:mb-6 sm:text-xs">
                Tap to View Full Size
              </span>
            </div>
          </button>
          <p className="font-body mx-auto mt-4 max-w-2xl text-center text-xs text-paper/45">
            Presented exactly as it appears in the book&rsquo;s memorial page, in its original
            Hebrew. Tap the image to read every name at full size.
          </p>
        </Reveal>
      </Container>

      {open && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Memorial page, full size"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="fixed right-5 top-5 z-10 font-display text-3xl text-paper/80 hover:text-paper"
          >
            &times;
          </button>
          <Image
            src={withBasePath("/photos/duvdevan/memorial/memorial-wall.webp")}
            alt={ALT_TEXT}
            width={2600}
            height={1838}
            className="mx-auto w-[2600px] max-w-none cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
