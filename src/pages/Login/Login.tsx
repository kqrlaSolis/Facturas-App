import React, { useState } from "react";
import { POST } from "../../core/utils/axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../core/store/authSlice";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login");
    const response = await POST("/login", {
      email: email,
      password: password,
    }).catch((error) => {
      console.error("Error:", error.response.data);
    });
    console.log(response);
    if (response) {
      const token = response.token;
      const decodedToken = decodeToken(token);
      console.log(decodedToken);
      dispatch(setUser(decodedToken));
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full h-2/4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="h-full p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Inicia Sesión
              </h1>
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-32 space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Correo Electronico
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-300 focus-ring-1 focus:border-primary-600 block w-full p-2.5 mb-4"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-300 focus-ring-1 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="flex justify-center w-full text-white bg-blue-400 hover:bg-blue-600 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
