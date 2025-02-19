import { Outlet } from "react-router";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <main className="flex flex-col text-white min-h-screen max-h-fit">
      <NavBar />
      <section className="bg-zinc-900 flex-1 md:grid-cols-12 md:grid xl:px-56">
        <div className="hidden md:block bg-zinc-800 col-span-2">SideBar</div>
        <Outlet />
        <aside className="hidden md:block col-span-2 mt-4 rounded-xl">
          <div className="bg-zinc-800">
            {/* Sería bueno un endpoint que recopile los posts con más likes en las últimas 24 horas */}
            <h2 className="font-bold text-lg p-3">Trendiest posts</h2>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default MainLayout;
