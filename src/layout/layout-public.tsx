import { Outlet } from "react-router-dom";

import Header from "../components/header";

export const LayoutPublic = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
