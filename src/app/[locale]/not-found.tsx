import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <img
          src="/images/tekpoint-logo.png"
          alt="Tekpoint"
          className="h-8 w-auto"
          width={180}
          height={32}
        />
      </Link>

      {/* 404 number */}
      <h1 className="text-8xl font-bold text-orange-600">404</h1>

      <h2 className="mt-6 text-2xl font-semibold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      {/* Action buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
        >
          ← Back to Homepage
        </Link>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Helpful links */}
      <div className="mt-16 text-sm text-gray-500">
        <p className="mb-3 font-medium text-gray-700">Popular pages:</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/about/" className="hover:text-orange-600 transition-colors">About</Link>
          <Link href="/services/" className="hover:text-orange-600 transition-colors">Services</Link>
          <Link href="/vendors/" className="hover:text-orange-600 transition-colors">Brands</Link>
          <Link href="/career/" className="hover:text-orange-600 transition-colors">Career</Link>
          <Link href="/become-a-partner/" className="hover:text-orange-600 transition-colors">Become a Partner</Link>
        </div>
      </div>
    </main>
  );
}
