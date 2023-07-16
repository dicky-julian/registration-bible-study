import { createBrowserRouter } from "react-router-dom";
import Registration from "./pages/registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
]);

export default router;