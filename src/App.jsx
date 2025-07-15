// import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About } from "./components/pages/About";
import { AppLayout } from "./components/layout/AppLayout";
import { Contact } from "./components/pages/Contact";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Home } from "./components/pages/Home";
import { Process } from "./components/pages/Process";
import { Products } from "./components/pages/Products";
import { Services } from "./components/pages/Services";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/products", element: <Products /> },
        { path: "/process", element: <Process /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
