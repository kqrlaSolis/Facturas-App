import React, { useState } from "react";
import { useSelector} from "react-redux";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state:any) => state.user);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-700">Facturas App </h1>

          <div className="relative" tabIndex={0} onBlur={() => setIsOpen(false)}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="sr-only">User icon</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <ul className="py-2 text-gray-700 dark:text-gray-200">
                  <li>
                    <p className="px-4 font-light text-gray-500 text-sm">
                      {user.name}
                    </p>
                    <p className="px-4 py-2 font-light text-gray-500 text-sm">
                      {user.email}
                    </p>
                  </li>
                  <li>
                    <a
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Configuración
                    </a>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
