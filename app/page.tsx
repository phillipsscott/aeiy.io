export default function Home() {
  return (
    <article className="prose-measure">
      <p className="ui-sans mb-8 text-sm tracking-wide text-[var(--muted)]">
        Scott Phillips
      </p>
      <h1 className="text-[1.75rem] sm:text-[2rem] font-normal leading-snug">
        where ideas can hang out and do whatever
      </h1>
      <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-[var(--foreground)]">
        <p>
          This is a quiet place for notes, essays, and half-formed thoughts —
          whatever wants room to breathe.
        </p>
        <p className="text-[var(--muted)]">
          Nothing polished is promised. Wander the writing when it appears, or
          sit with the emptiness for a while.
        </p>
      </div>
    </article>
  );
}
