'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
        <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Not Found</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          Failed to load product!
        </p>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </main>
  );
}
