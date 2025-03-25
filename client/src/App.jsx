import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Property from "./components/Property";
import Profile from "./components/Profile";
import AddProperty from "./components/AddProperty";
import LandLordProp from "./components/LandLordProp";

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
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-property",
    element: <AddProperty />,
  },
  {
    path: "/property/:propertyId",
    element: <LandLordProp />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
