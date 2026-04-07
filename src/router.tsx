import { createBrowserRouter } from "react-router-dom"
import FilterPage from "./page/filter-page"
import { regionsLoader } from "./loader/category-loader"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    loader: regionsLoader
  }
])