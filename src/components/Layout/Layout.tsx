import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navigation } from "../Nav";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
