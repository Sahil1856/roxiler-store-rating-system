import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiLogOut,
  FiPlusCircle,
} from "react-icons/fi";

export default function DashboardLayout({
  children,
}) {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.clear();

    navigate("/", { replace: true });

    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <aside className="w-72 bg-slate-900/70 backdrop-blur-xl border-r border-slate-800 relative">

        <div className="p-8">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Roxiler
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Store Rating Platform
          </p>

        </div>

        <nav className="px-4 space-y-3">

          {role === "USER" && (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiHome />
                Dashboard
              </Link>

              <Link
                to="/stores"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiShoppingBag />
                Stores
              </Link>
            </>
          )}

          {role === "OWNER" && (
            <>
              <Link
                to="/owner"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiHome />
                Owner Dashboard
              </Link>
            </>
          )}

          {role === "ADMIN" && (
            <>
              <Link
                to="/admin"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiHome />
                Dashboard
              </Link>

              <Link
                to="/users"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiUsers />
                Users
              </Link>

              <Link
                to="/stores"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiShoppingBag />
                Stores
              </Link>

              <Link
                to="/add-user"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiPlusCircle />
                Add User
              </Link>

              <Link
                to="/add-store"
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                <FiPlusCircle />
                Add Store
              </Link>
            </>
          )}

        </nav>

        <div className="absolute bottom-6 left-4 right-4">

          <button
            onClick={handleLogout}
            className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            p-4
            rounded-2xl
            bg-red-500/20
            hover:bg-red-500
            text-white
            transition-all
            duration-300
            "
          >
            <FiLogOut />
            Logout
          </button>

        </div>

      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>

    </div>
  );
}