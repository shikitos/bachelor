import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 Your Project</p>
      </footer>
    </div>
  );
};
