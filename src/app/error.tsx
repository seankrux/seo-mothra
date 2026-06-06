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
    <div className="min-h-screen flex items-center justify-center px-6 py-8 text-[#211d19]">
      <div className="max-w-md w-full text-center rounded-3xl border border-[rgba(35,31,27,0.12)] bg-white/70 p-8 shadow-sm">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-[#665d54] mb-6">
          {error.message || "An unexpected error occurred."}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="w-full rounded-full border border-[#47624f] bg-[#47624f] px-6 py-3 font-medium text-white transition hover:bg-[#3d5644]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="w-full rounded-full border border-[rgba(35,31,27,0.12)] bg-white/70 px-6 py-3 transition hover:bg-white text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
