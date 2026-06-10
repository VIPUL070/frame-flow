import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-canvas p-1.5 sm:p-4 lg:p-6">
      <div className="relative mx-auto p-2.5 max-w-350 overflow-hidden rounded-2xl bg-surface shadow-card">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;