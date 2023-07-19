import { createBrowserRouter } from "react-router-dom";
import Registration from "./pages/registration";
import Transaction from "./pages/transaction";
import TransactionDetail from "./pages/transaction-detail";
import Monitoring from "./pages/monitoring";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/transaction/:id",
      element: <TransactionDetail />,
    },
    {
      path: "/admin",
      element: <Monitoring />,
    },
]);

export default router;