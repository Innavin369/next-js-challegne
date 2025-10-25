import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Not Found</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          Could not find the requested resource.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
