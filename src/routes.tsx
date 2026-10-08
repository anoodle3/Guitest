import { createHashRouter } from "react-router-dom";
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage";
import { CasesPage } from "./pages/CasesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { ResourcesPage } from "./pages/ResourcesPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product", element: <ProductPage /> },
      { path: "cases", element: <CasesPage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
