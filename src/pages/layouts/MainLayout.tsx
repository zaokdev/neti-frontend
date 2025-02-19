import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main>
      <div>SideBar</div>
      <Outlet />
      <div>aside</div>
    </main>
  );
};

export default MainLayout;
