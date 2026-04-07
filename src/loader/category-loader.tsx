export async function regionsLoader() {
  const res = await fetch("/data/category.json")
  const raw = await res.json()
  return {
    categories: raw.categories ?? [],      
    subCategories: raw.subCategories ?? [], 
    brands: raw.brands ?? [],              
    products: raw.products ?? []         
  }
}