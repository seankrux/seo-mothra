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
    <div className="min-h-screen flex items-center justify-center px-6 py-8 text-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-white/70 mb-6">
          {error.message || "An unexpected error occurred."}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="w-full rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90"
          >
            Try Again
          </button>
          <a
            href="/"
            className="w-full rounded-full border border-[rgba(255,248,238,0.2)] bg-white/[0.05] px-6 py-3 transition hover:bg-white/[0.08] text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
