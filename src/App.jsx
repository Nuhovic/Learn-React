import { useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import KakoKupiti from "./pages/KakoKupiti";
import Kontakt from "./pages/Kontakt";
import MyLayout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MyLayout>
        <Outlet />
      </MyLayout>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "kakokupiti/:id", element: <KakoKupiti /> },
      { path: "kontakt", element: <Kontakt /> },
    ],
  },
]);

function App() {
  const ecommerce = useSelector((state) => state.ecommerce);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
