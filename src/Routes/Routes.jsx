import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch("https://coffee-storess-server.vercel.app/coffees"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee/>,
  },
  {
    path: "updatecoffee/:id",
    element: <UpdateCoffee/>,
    loader: ({ params }) => fetch(`https://coffee-storess-server.vercel.app/coffees/${params.id}`),
  },
]);

export default router;
