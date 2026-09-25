import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A brief note about Scott Phillips.",
};

export default function AboutPage() {
  return (
    <article className="prose-measure">
      <h1 className="text-2xl font-normal">About</h1>
      <div className="mt-8 space-y-5 leading-relaxed">
        <p>
          Scott Phillips writes here when there is something worth putting into
          words.
        </p>
        <p className="text-[var(--muted)]">
          More soon — this page is a placeholder until a fuller note belongs.
        </p>
      </div>
    </article>
  );
}
