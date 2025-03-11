import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Property from "./components/Property";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/property",
    element: <Property />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
