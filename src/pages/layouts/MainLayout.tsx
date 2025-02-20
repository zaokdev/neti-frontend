import { Link, Outlet } from "react-router";
import NavBar from "./NavBar";
import { Briefcase, HomeIcon, MessageCircleReplyIcon } from "lucide-react";

const MainLayout = () => {
  return (
    <main className="flex flex-col text-white min-h-screen max-h-fit">
      <NavBar />
      <section className="bg-zinc-900 flex-1 md:grid-cols-12 md:grid xl:px-32">
        <div className="hidden bg-zinc-800 col-span-2 md:flex md:justify-start">
          <ul className="mt-4 flex-1 flex flex-col gap-2">
            <li>
              <Link
                to={"/"}
                className="bor flex gap-2 hover:bg-zinc-700 px-4 py-2 rounded-4xl"
              >
                <HomeIcon className="shrink-0" /> Home
              </Link>
            </li>
            <li>
              <Link
                to={"jobs"}
                className="flex gap-2 hover:bg-zinc-700 px-4 py-2 rounded-4xl"
              >
                <Briefcase /> Jobs
              </Link>
            </li>
            <li>
              <Link
                to={"messages"}
                className="flex gap-2 hover:bg-zinc-700 px-4 py-2 rounded-4xl"
              >
                <MessageCircleReplyIcon className="shrink-0" /> Messages
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
