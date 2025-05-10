import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Clients from "../pages/Clients/Clients";
import Invoices from "../pages/Invoices/Invoices";
import Users from "../pages/Users/Users";
import { PrivateRoutes } from "./PrivateRoutes";
import { useSelector } from "react-redux";
import { InvoiceDetail } from "../pages/Invoices/components/InvoiceDetail";

export const AppRouter = () => {
  const user = useSelector((state: any) => state.user);

  return (
      <Routes>
        {user.id === 0 ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/login" element={<Navigate to={"/dashboard"} replace />} />
        )}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoicedetails" element={<InvoiceDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
        </Route>
      </Routes>
  );
};
