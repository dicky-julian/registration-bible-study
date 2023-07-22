import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Registration from "./pages/registration";
import Transaction from "./pages/transaction";
import TransactionDetail from "./pages/transaction-detail";
import Report from "./pages/report";
import ReportLogin from './pages/report-login';
import AuthProvider from './utils/auth-provider';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/transaction/:id' element={<TransactionDetail />} />
        <Route path='/report' element={<Report />} />
        <Route path='/report/login' element={<ReportLogin />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
