import React from "react";
import NavBar from "./layouts/NavBar";
import Input from "./components/Input";
import { Link } from "react-router";
import "../styles/styles.css"

const SignUp = () => {
  return (
    <section className="text-white h-screen flex flex-col">
      <NavBar />
      {/*GRID DE 8/4 */}
      <section className="md:grid md:grid-cols-12 md:gap-16 bg-zinc-900 min-h-screen md:py-8 md:px-12">
        <div id="hapihapi" className="md:col-span-7 bg-zinc-800 rounded-xl hidden md:block">
          
        </div>
        <div className="md:col-span-5">
          {/* EMPIEZA EL FORMULARIO */}
          <form className="rounded-lg shadow-lg h-full flex flex-col md:justify-evenly">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            {/* Nombre */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>

            {/* Correo electrónico */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>

            {/* Contraseña */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
              />
            </div>

            {/* Confirmar Contraseña */}
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Your Password"
              />
            </div>

            <span>
              Already registered?{" "}
              <Link
                to={"/auth/signin"}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </span>

            {/* Botón de envío */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
