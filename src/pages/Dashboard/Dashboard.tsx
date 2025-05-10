import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();


  return (
    <div className="flex justify-center max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <button
          onClick={() => navigate("/invoices")}
          className="w-full min-h-[240px] p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-blue-50 hover:border-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Facturas
          </h5>
        </button>

        <button
          onClick={() => navigate("/clients")}
          className="w-full min-h-[240px] p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-blue-50 hover:border-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Clientes
          </h5>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
