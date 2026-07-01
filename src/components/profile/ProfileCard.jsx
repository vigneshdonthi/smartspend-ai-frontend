import useAuth from "../../hooks/useAuth";

function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl text-white font-bold">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {user?.full_name || user?.username}
          </h1>

          <p className="text-slate-500 mt-1">
            @{user?.username}
          </p>

          <p className="text-slate-500">
            {user?.email}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;