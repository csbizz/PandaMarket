import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Pandamarket() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Pandamarket;
