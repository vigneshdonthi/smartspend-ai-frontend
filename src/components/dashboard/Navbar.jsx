import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Left Side */}
      <div className="flex items-center">

        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-2 rounded-lg hover:bg-slate-100 transition"
        >
          <Menu size={22} />
        </button>

      </div>

      {/* Right Side */}
      <div className="relative">

        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
        >

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div className="hidden md:block text-left">

            <h4 className="font-semibold">
              {user?.full_name || user?.username}
            </h4>

            <p className="text-xs text-slate-500">
              Personal Account
            </p>

          </div>

          <ChevronDown size={18} />

        </button>

        {openProfile && (

          <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-xl z-50 overflow-hidden">

            <button
              onClick={() => {
                navigate("/profile");
                setOpenProfile(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-100 transition"
            >

              <User size={18} />

              My Profile

            </button>

            <hr />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition"
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;