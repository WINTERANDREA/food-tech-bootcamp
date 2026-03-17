import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-dark min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <h1 className="font-headline text-3xl font-bold text-caglio mb-4 uppercase tracking-caps">
        Food Tech Bootcamp
      </h1>
      <p className="font-body text-lg text-caglio mb-2">
        This page doesn&apos;t exist.
      </p>
      <p className="font-body text-base text-crosta mb-8">
        Like a CRM in most caseifici.
      </p>
      <Link
        href="/"
        className="font-body text-sm text-terra hover:text-crosta transition-colors"
      >
        ← Back to the lab
      </Link>
    </div>
  );
}
