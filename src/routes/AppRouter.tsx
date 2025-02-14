import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Clients from "../pages/Clients/Clients";
import Invoices from "../pages/Invoices/Invoices";
import Users from "../pages/Users/Users";

export const AppRouter = () => {

  const isLogin = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="clients" element={<Clients />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Navigate to={
          isLogin ? '/dashboard' : '/login'
        } replace />} />
      </Routes>
    </BrowserRouter>
  );
};
