import type { Product } from "../types/categories"

type CategoryDisplayProps = {
  category?: string
  subCategory?: string
  brand?: string
  product?: Product[]
}

function DisplayBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-2">
        {label}
      </p>
      <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
        {value}
      </h2>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:border-blue-100 transition-all">
      <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center">
        <span className="text-4xl">📦</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-gray-800 leading-snug">{product.name}</p>
        <p className="text-xs text-gray-400">ID: {product.id}</p>
      </div>
      <p className="text-base font-bold text-blue-500 mt-auto">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </div>
  )
}

export default function CategoryDisplay({
  category,
  subCategory,
  brand,
  product,
}: CategoryDisplayProps) {
  if (!category) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-3">🗂️</p>
          <p className="text-gray-400 text-sm font-medium">Pilih category untuk memulai</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col p-8 gap-8">
      <div className="flex flex-col items-center gap-1">
        <DisplayBlock label="CATEGORY" value={category} />
        {subCategory && (
          <>
            <div className="text-2xl text-gray-200 my-2">↓</div>
            <DisplayBlock label="SUB CATEGORY" value={subCategory} />
          </>
        )}
        {brand && (
          <>
            <div className="text-2xl text-gray-200 my-2">↓</div>
            <DisplayBlock label="BRAND" value={brand} />
          </>
        )}
      </div>

      {product && product.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">
              PRODUCTS
            </p>
            <span className="text-xs bg-blue-50 text-blue-400 font-semibold px-2 py-0.5 rounded-full">
              {product.length} item
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}