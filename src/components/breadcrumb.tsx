type BreadcrumbProps = {
  category?: string
  subCategory?: string
  brand?: string
  product?: string
}

export default function Breadcrumb({ category, subCategory, brand, product }: BreadcrumbProps) {
  const crumbs = ["Produk", category, subCategory, brand, product].filter(Boolean) as string[]
  return (
    <nav
  className="product-breadcrumb px-8 py-4 border-b border-gray-200 bg-white text-sm flex items-center gap-1"
  aria-label="breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-gray-300">›</span>}
          <span className={i === crumbs.length - 1 ? "text-blue-500 font-semibold" : "text-gray-400"}>
            {crumb}
          </span>
        </span>
      ))}
    </nav>
  )
}