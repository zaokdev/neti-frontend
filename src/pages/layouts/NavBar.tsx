//https://www.flaticon.es/sticker-gratis/internet_13725485?term=red&page=1&position=83&origin=search&related_id=13725485
import { Link } from "react-router";
import Input from "../components/Input";
import { Search, User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full bg-zinc-800 md:h-20 text-white flex justify-between items-center xl:px-32 px-8 md:gap-32 gap-4">
      <div className="flex justify-center items-center">
        <img src="/logo/logo.png" alt="logo neti" className="h-16" />
        <Link
          to={"/"}
          className="text-3xl text-blue-400 font-bold hidden md:block"
        >
          Neti
        </Link>
      </div>

      <div className="flex gap-8">
        <form className="flex basis-3xl">
          <Input
            type={"text"}
            id={"search"}
            name={"search"}
            className="rounded-r-none"
          />
          <button className="bg-zinc-700 cursor-pointer rounded-r-lg pr-2">
            <Search />
          </button>
        </form>
        <Link className="rounded-full p-2 md:p-4 hover:bg-zinc-700 cursor-pointer" to={"/auth/signin"}>
        <User />
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;
