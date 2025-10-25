import type { Product } from "@/app/types/product";
import ListItem from "@/app/components/ListItem";

export default async function Home() {
  const varOcg = 'Fetching products for homepage';
  const varFiltersCg = '?'; // could be used for query params in future

  const res = await fetch(`https://fakestoreapi.com/products${varFiltersCg}`, {
    headers: { 'User-Agent': 'Next.js Server' }
  });

  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
  const products = await res.json();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <div className="p-4 md:p-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              All Products
          </h3>
        </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((p: Product) => (
          <ListItem
            id={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            price={p.price}
            rating={p.rating}
            category={p.category}
          />
        ))}
      </ul>
      </div>
    </main>
  )
}
