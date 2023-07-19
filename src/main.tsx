import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Registration from "./pages/registration";
import Transaction from "./pages/transaction";
import TransactionDetail from "./pages/transaction-detail";
import Monitoring from "./pages/monitoring";
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Registration />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/transaction/:id' element={<TransactionDetail />} />
      <Route path='/admin' element={<Monitoring />} />
    </Routes>
  </BrowserRouter>
);
