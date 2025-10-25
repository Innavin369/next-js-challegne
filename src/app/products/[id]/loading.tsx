// __define-ocg__
export default function Loading() {
  const varOcg = true;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 w-full bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
        Loading Product...
      </h2>
      <div className="w-full max-w-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm animate-pulse">
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md mb-4" />

        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4" />

        <div className="flex items-center justify-between">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </main>
  );
}
