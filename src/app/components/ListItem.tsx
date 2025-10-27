"use client";

import type { Product } from "@/app/types/product";
import Link from "next/link";
import Image from "next/image";

// __define-ocg__ Card component for product previews and listings
export default function ListItem({
  id,
  title,
  description,
  image,
  price,
  rating,
  category,
}: Product) {
   const varOcg = { id };

  return (
    <li  className="px-2 pb-4">
      <Link
        href={`/products/${id}`}
        className="block border rounded-xl p-4 hover:shadow-lg transition bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
      >
        <div className="flex justify-center">
          <Image
            src={image}
            alt={`${title} — ${description?.slice(0, 50) ?? ""}`}
            width={128}
            height={128}
            className="object-contain h-32 w-32"
            priority
          />
        </div>

        <div className="mt-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {description}
            </p>
          )}

          {rating && (
            <div className="flex flex-col items-start mt-2.5 mb-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(rating.rate)
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
                  {rating.rate}
                </span>
              </div>

              <span className="text-sm text-gray-900 dark:text-white mt-1">
                {rating.count} reviews
              </span>
            </div>
          )}

          {price !== undefined && (
            <div className="text-lg font-bold text-gray-900 dark:text-white mt-2">
              ${price}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
