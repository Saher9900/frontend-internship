import { Outlet } from "react-router-dom";
import NavBar from "./shared/NaveBar/NaveBar";
import Footer from './shared/Footer/Footer'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
