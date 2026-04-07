import type { SubCategory, Brand, Product } from "../types/categories"

export function filterSubCategories(
  subCategories: SubCategory[],
  categoryId?: string
) {
  if (!categoryId) return subCategories
  return subCategories.filter((s) => s.categoryId === categoryId)
}

export function filterBrands(
  brands: Brand[],
  subCategoryId?: string
) {
  if (!subCategoryId) return brands
  return brands.filter((b) => b.subCategoryId === subCategoryId)
}

export function filterProducts(
  products: Product[],
  brandId?: string
) {
  if (!brandId) return products
  return products.filter((p) => p.brandId === brandId)
}