"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-red-500">500</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
        Something went wrong
      </h2>
      <p className="mt-3 text-gray-600 max-w-md">
        An unexpected error occurred. Please try again later.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </main>
  );
}
