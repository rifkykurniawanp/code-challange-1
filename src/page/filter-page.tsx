import { useLoaderData, useSearchParams } from "react-router-dom"
import type { CategoryData } from "../types/categories"
import {
  filterSubCategories,
  filterBrands,
  filterProducts,
} from "../utils/category-filter"
import Breadcrumb from "../components/breadcrumb"
import Select from "../components/category-select"
import ProductDisplay from "../components/category-display"

export default function FilterPage() {
  const data = useLoaderData() as CategoryData
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryId = searchParams.get("category") || undefined
  const subCategoryId = searchParams.get("subCategory") || undefined
  const brandId = searchParams.get("brand") || undefined
  const selectedCategory = data.categories.find((c) => c.id === categoryId)
  const selectedSubCategory = data.subCategories.find((s) => s.id === subCategoryId)
  const selectedBrand = data.brands.find((b) => b.id === brandId)
  const subCategories = filterSubCategories(data.subCategories, categoryId)
  const brands = filterBrands(data.brands, subCategoryId)
  const products = filterProducts(data.products, brandId)

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
            Product Filter
          </p>
          <h1 className="text-base font-bold text-gray-800">Filter Produk</h1>
        </div>
        <div className="flex flex-col gap-5 px-6 py-6 flex-1">
          <Select
            name="category"
            label="CATEGORY"
            value={selectedCategory?.id}
            options={data.categories}
            onChange={(id) => setSearchParams({ category: id })}
          />
          <Select
            name="subCategory"
            label="SUB CATEGORY"
            value={selectedSubCategory?.id}
            options={subCategories}
            disabled={!selectedCategory}
            onChange={(id) =>
              setSearchParams({ category: categoryId ?? "", subCategory: id })
            }
          />
          <Select
            name="brand"
            label="BRAND"
            value={selectedBrand?.id}
            options={brands}
            disabled={!selectedSubCategory}
            onChange={(id) =>
              setSearchParams({
                category: categoryId ?? "",
                subCategory: subCategoryId ?? "",
                brand: id,
              })
            }
          />
        </div>
        <div className="px-6 py-5 border-t border-gray-100">
          <button
            onClick={() => setSearchParams({})}
            className="w-full py-2.5 flex items-center justify-center gap-2 border border-gray-300 text-gray-500 text-sm rounded-xl hover:border-red-400 hover:text-red-400 transition-colors"
          >
            <span>✕</span>
            <span className="font-semibold tracking-wide">RESET</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <Breadcrumb
          category={selectedCategory?.name}
          subCategory={selectedSubCategory?.name}
          brand={selectedBrand?.name}
        />
        <div className="flex-1 overflow-auto">
          <ProductDisplay
            category={selectedCategory?.name}
            subCategory={selectedSubCategory?.name}
            brand={selectedBrand?.name}
            product={products}
          />
        </div>
      </main>
    </div>
  )
}