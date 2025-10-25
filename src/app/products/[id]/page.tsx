import type { Metadata } from "next";
import type { Product } from "@/app/types/product";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

// __define-ocg__: Server-side fetching for individual product
async function getProduct(id: string, isDraft: boolean): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    headers: { "User-Agent": "Next.js Server" },
    cache: isDraft ? "no-store" : "force-cache",
  });

  if (!res.ok) {
    console.warn(`Product ${id} not found`);
    return notFound();
  }
    try {
    const product = await res.json();
    if (!product || Object.keys(product).length === 0) {
      console.warn(`Empty JSON for product ${id}`);
      return notFound();
    }
    return product;
  } catch (err) {
    console.error(`Failed to parse JSON for product ${id}`, err);
    return notFound();
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.id, false);

  return {
    title: `${product.title} | My Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: "website",
      url: `https://fakestoreapi.com/products/${params.id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { isEnabled } = draftMode();
  console.log("🟡 draftMode:", isEnabled);
  const varOcg = params.id;

  const product = await getProduct(params.id, isEnabled);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen bg-white dark:bg-gray-900 p-8">
      {/* <h2 className="text-2xl font-semibold mb-8 w-full text-center md:text-left">
        {isEnabled ? "🟡 Preview Mode — Live Data" : "Storefront"}
      </h2> */}
         {isEnabled ? "🟡 Preview Mode — Live Data" : "🛍️ Storefront (cached)"}

      <img
        src={product.image}
        alt={`${product.title} — ${product.description?.slice(0, 50) ?? ""}`}
        className="object-contain w-full md:w-1/3 h-1/3 md:h-full rounded-none mb-8 md:mb-0"
      />

      <div className="flex flex-col justify-center p-4 md:w-1/2 text-center md:text-left">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>

        {product.category && (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
            {product.category}
          </span>
        )}

        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mt-4">
          {product.description}
        </p>

        {product.rating && (
          <div className="flex flex-col mt-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating!.rate)
                      ? "text-yellow-300"
                      : "text-gray-200 dark:text-gray-600"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white mt-1">
              {product.rating.count} reviews
            </span>
          </div>
        )}

        {product.price !== undefined && (
          <div className="text-lg font-bold text-gray-900 dark:text-white mt-4">
            ${product.price}
          </div>
        )}
      </div>
    </div>
  );
}
