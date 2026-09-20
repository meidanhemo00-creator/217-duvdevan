import { Nav } from "@/components/duvdevan/Nav";
import { Hero } from "@/components/duvdevan/Hero";
import { Introduction } from "@/components/duvdevan/Introduction";
import { Chapters } from "@/components/duvdevan/Chapters";
import { QuoteBreak } from "@/components/duvdevan/QuoteBreak";
import { FeaturedQuote } from "@/components/duvdevan/FeaturedQuote";
import { Gallery } from "@/components/duvdevan/Gallery";
import { Memorial } from "@/components/duvdevan/Memorial";
import { Presale } from "@/components/duvdevan/Presale";
import { Footer } from "@/components/duvdevan/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Chapters />
        <QuoteBreak
          tone="paper"
          quote="We were the tip of the spear in operations—some of which aligned with the unit's core mission, while others had nothing to do with undercover work."
          attribution="Lt. Col. (Res.) Eran Wolk, Deputy Commander of Duvdevan during the Second Intifada and Operation “Defensive Shield”"
        />
        <FeaturedQuote />
        <Gallery />
        <Memorial />
        <QuoteBreak
          tone="dark"
          quote="Each fell in a different period and under different circumstances, but every loss is an entire world—to the family, their teammates, and the unit as a whole. Their legacy is not a distant memory. It lives in every handshake, every glance, and every departure for a mission."
          attribution="From the book's epilogue, “The Unending Shadow”"
        />
        <Presale />
      </main>
      <Footer />
    </>
  );
}
