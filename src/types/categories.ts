export type Category = {
  id: string
  name: string
}

export type SubCategory = {
  id: string
  categoryId: string
  name: string
}

export type Brand = {
  id: string
  subCategoryId: string
  name: string
}

export type Product = {
  id: string
  brandId: string
  name: string
  price: number
}

export type CategoryData = {
  categories: Category[]
  subCategories: SubCategory[]
  brands: Brand[]
  products: Product[]
}