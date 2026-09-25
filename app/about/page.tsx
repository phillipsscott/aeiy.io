import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-10">
      <nav aria-label="Primary" className="mb-16 flex items-center gap-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-800">
          Home
        </Link>
        <Link href="/about" className="text-neutral-900">
          About
        </Link>
        <Link href="/writing" className="hover:text-neutral-800">
          Writing
        </Link>
      </nav>
      <h1 className="text-2xl font-normal tracking-tight text-neutral-900">About</h1>
      <p className="mt-4 text-neutral-500">Coming soon.</p>
    </div>
  );
}
