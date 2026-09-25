import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-neutral-900">
      <header className="mx-auto w-full max-w-2xl px-6 pt-10">
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm text-neutral-500">
          <Link href="/" className="text-neutral-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-neutral-800">
            About
          </Link>
          <Link href="/writing" className="hover:text-neutral-800">
            Writing
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
        <p className="mb-6 text-xs tracking-[0.2em] text-neutral-400">AEIY</p>
        <h1 className="text-3xl font-normal leading-snug tracking-tight text-neutral-900 sm:text-4xl sm:leading-snug">
          where ideas can hang out and do whatever
        </h1>
      </main>

      <footer className="mx-auto w-full max-w-2xl px-6 pb-10">
        <p className="text-xs text-neutral-400">Aeiy</p>
      </footer>
    </div>
  );
}
