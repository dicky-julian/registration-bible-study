import { createBrowserRouter } from "react-router-dom";
import Registration from "./pages/registration";
import Billing from "./pages/billing";
import BillingDetail from "./pages/billing-detail";
import Monitoring from "./pages/monitoring";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/billing",
      element: <Billing />,
    },
    {
      path: "/billing/:id",
      element: <BillingDetail />,
    },
    {
      path: "/admin",
      element: <Monitoring />,
    },
]);

export default router;