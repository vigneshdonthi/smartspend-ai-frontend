import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        open={sidebarOpen}
      />

      <div className="flex flex-col flex-1">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;