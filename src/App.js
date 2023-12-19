import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Consulting from "./components/Consulting";
import Gestaoprojetos from "./components/Gestaoprojetos";
import RootLayout from "./Navigations/RootLayout";
import ErrorCom from "./components/ErrorCom";
import ServiceDeskNavigation from "./components/ServiceDesk/ServiceDeskNavigation";
import React from "react";
import ProductDetail from "./components/ServiceDesk/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorCom />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/consulting", element: <Consulting /> },
      { path: "/gestaoprojetos", element: <Gestaoprojetos /> },
      { path: "/servicedesk", element: <ServiceDeskNavigation /> },
      { path: "/servicedesk/:productid", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
