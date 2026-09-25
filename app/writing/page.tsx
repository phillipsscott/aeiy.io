import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Scott Phillips.",
};

export default function WritingPage() {
  return (
    <article className="prose-measure">
      <h1 className="text-2xl font-normal">Writing</h1>
      <p className="mt-8 text-[var(--muted)] leading-relaxed">
        Nothing published yet.
      </p>
    </article>
  );
}
