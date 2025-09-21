"use client"; // 👈 must be a client component
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught in error.tsx:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-2xl font-bold text-red-600">⚠️ Something went wrong!</h1>
      <p className="text-gray-600 mt-2">{error.message}</p>

      <button
        onClick={() => reset()} // 👈 retries rendering the route
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}
