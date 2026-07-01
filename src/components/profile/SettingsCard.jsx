import useAuth from "../../hooks/useAuth";

function SettingsCard() {

  const { logout } = useAuth();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="space-y-4">

        <button className="w-full border rounded-xl p-4 text-left hover:bg-slate-50">
          🌙 Dark Mode (Coming Soon)
        </button>

        <button className="w-full border rounded-xl p-4 text-left hover:bg-slate-50">
          🔑 Change Password (Coming Soon)
        </button>

        <button
          onClick={logout}
          className="w-full bg-red-600 text-white rounded-xl p-4 hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default SettingsCard;