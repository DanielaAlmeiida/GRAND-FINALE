import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Banner from "../Banner";

export default function DefaultPage() {
  return (
    <main>
      <Banner />
      <Outlet />
      <Footer />
    </main>
  );
}
