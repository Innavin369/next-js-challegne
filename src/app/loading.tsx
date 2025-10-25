// __define-ocg__
export default function Loading() {
  const varOcg = true;

  return (
    <main className="flex flex-col items-center justify-between p-24 w-full">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
          Loading Products...
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <li
              key={i}
              className="animate-pulse border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-between space-y-4 bg-white dark:bg-gray-800 shadow-sm"
            >
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-md" />
              <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-1/2 h-5 bg-gray-300 dark:bg-gray-600 rounded" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
