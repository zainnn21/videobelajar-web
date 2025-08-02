import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
import HomePage from "./Pages/homepage";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
