import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "./contexts/ThemeContext";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Theme>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Theme>
  </ThemeProvider>
);
