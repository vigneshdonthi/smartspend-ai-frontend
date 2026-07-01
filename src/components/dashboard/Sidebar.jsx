import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  FileText,
  Bot,
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

function Sidebar({ open }) {
  return (
    <aside
      className={`bg-slate-950 text-white flex flex-col transition-all duration-300 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div className="p-6 border-b border-slate-800">
        {open ? (
          <>
            <h1 className="text-2xl font-bold text-blue-500">
              SmartSpend AI
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              Personal Finance
            </p>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-blue-500 text-center">
            S
          </h1>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center rounded-xl transition-all ${
                  open
                    ? "gap-3 px-4 py-3"
                    : "justify-center px-0 py-3"
                } ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon className="h-5 w-5 flex-shrink-0" />

              {open && (
                <span className="font-medium">
                  {menu.title}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;