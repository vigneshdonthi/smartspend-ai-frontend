import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  FileText,
  Bot,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Expenses",
    icon: Wallet,
    path: "/expenses",
  },
  {
    title: "Budgets",
    icon: PiggyBank,
    path: "/budgets",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "AI Insights",
    icon: Bot,
    path: "/ai-insights",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-blue-500">
          SmartSpend AI
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Personal Finance
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={20} />

              {menu.title}
            </NavLink>
          );
        })}

      </nav>

      <div className="p-4 border-t border-slate-800">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-red-600 transition">

          <LogOut size={20} />

          Logout

        </button>

      </div>
    </aside>
  );
}

export default Sidebar;