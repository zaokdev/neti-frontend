import NavBar from "./layouts/NavBar";
import Input from "./components/Input";
import { Link, useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <section className="text-white h-screen flex flex-col">
      <NavBar />
      <section className="md:grid md:grid-cols-12 md:gap-16 bg-zinc-900 md:py-8 md:px-12 flex-155">
        <div className="md:col-span-7 bg-zinc-800 rounded-xl hidden md:block"></div>
        <div className="md:col-span-5">
          {/* EMPIEZA EL FORMULARIO */}
          <form
            className="rounded-lg shadow-lg h-full flex flex-col md:justify-evenly"
            onSubmit={() => {
              navigate("/");
            }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

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

            <span>
              Not registered?{" "}
              <Link
                to={"/auth/signup"}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </span>

            {/* Botón de envío */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default SignIn;
