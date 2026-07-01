import { Bell, Moon, Search } from "lucide-react";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Search */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <Bell
          className="cursor-pointer text-slate-600 hover:text-blue-600"
          size={22}
        />

        <Moon
          className="cursor-pointer text-slate-600 hover:text-blue-600"
          size={22}
        />

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div className="hidden md:block">
            <h4 className="font-semibold">
              {user?.full_name || user?.username}
            </h4>

            <p className="text-xs text-slate-500">
              Personal Account
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;