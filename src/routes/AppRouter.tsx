import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Clients from "../pages/Clients/Clients";
import Invoices from "../pages/Invoices/Invoices";
import Users from "../pages/Users/Users";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="clients" element={<Clients />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="users" element={<Users />} />


        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
