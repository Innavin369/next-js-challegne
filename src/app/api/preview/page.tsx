export default function Preview({ searchParams }: { searchParams: any }) {
  const { title, price, image } = searchParams;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold">{title || "Preview Mode Active"}</h2>
      {image && <img src={image} alt={title} className="mt-4 h-64 object-contain" />}
      {price && <p className="mt-2 text-gray-700">${price}</p>}
      <p className="mt-6 text-sm text-gray-400">(Dynamic Preview)</p>
    </div>
  );
}
