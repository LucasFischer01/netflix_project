import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Login, Welcome } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/Login",
    element: <Login />
  },
]);
export const Routes = (): JSX.Element => <RouterProvider router={router} />