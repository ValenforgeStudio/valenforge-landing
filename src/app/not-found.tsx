import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-neutral-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="inline-flex mt-6 rounded-2xl border border-white/15 px-4 py-2 hover:bg-white/5"
      >
        Back to Home
      </Link>
    </main>
  );
}
