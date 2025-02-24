import { Link, Outlet } from "react-router";
import NavBar from "./NavBar";
import { Briefcase, HomeIcon, MessageCircleReplyIcon } from "lucide-react";

const MainLayout = () => {
  return (
    <main className="flex flex-col text-white min-h-screen max-h-fit">
      <NavBar />
      {/* la sidebar uwu */}
      <section className="bg-zinc-900 flex-1 md:grid-cols-12 md:grid xl:px-32 z-50">
        <div className="fixed z-50 w-full md:w-auto md:relative bg-zinc-800 col-span-2 md:flex md:justify-start bottom-0">
          <ul className="md:mt-4 flex-1 flex md:flex-col gap-2 md:px-2 h12">
            <li className="flex-1 md:flex-none">
              <Link
                to={"/"}
                className="flex gap-2 hover:bg-zinc-700 px-4 py-2 md:rounded-4xl justify-center md:justify-start"
              >
                <HomeIcon className="shrink-0" /> <p className="hidden md:block">Home</p>
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link
                to={"jobs"}
                className="flex gap-2 hover:bg-zinc-700 px-4 py-2 md:rounded-4xl justify-center md:justify-start"
              >
                <Briefcase /> <p className="hidden md:block">Jobs</p>
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link
                to={"messages"}
                className="flex gap-2 hover:bg-zinc-700 px-4 py-2 md:rounded-4xl justify-center md:justify-start"
              >
                <MessageCircleReplyIcon className="shrink-0" /> <p className="hidden md:block">Messages</p>
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
