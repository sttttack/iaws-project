import { Outlet } from "react-router";

import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
