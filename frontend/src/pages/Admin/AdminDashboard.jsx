import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import API from "../../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
    avgRating: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/dashboard");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 text-lg mb-10">
            Manage users, stores and ratings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <p className="text-slate-400 mb-3">
              Total Users
            </p>

            <h2 className="text-5xl font-bold">
              {stats.totalUsers}
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <p className="text-slate-400 mb-3">
              Total Stores
            </p>

            <h2 className="text-5xl font-bold">
              {stats.totalStores}
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <p className="text-slate-400 mb-3">
              Total Ratings
            </p>

            <h2 className="text-5xl font-bold">
              {stats.totalRatings}
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <p className="text-slate-400 mb-3">
              Average Rating
            </p>

            <h2 className="text-5xl font-bold text-yellow-400">
              ⭐ {stats.avgRating || 0}
            </h2>
          </motion.div>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link to="/add-user">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-indigo-600 rounded-3xl p-8 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Add User
                </h3>

                <p>
                  Create USER, OWNER and ADMIN accounts.
                </p>
              </motion.div>
            </Link>

            <Link to="/add-store">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-cyan-600 rounded-3xl p-8 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Add Store
                </h3>

                <p>
                  Register new stores.
                </p>
              </motion.div>
            </Link>

            <Link to="/users">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Manage Users
                </h3>

                <p>
                  View all registered users.
                </p>
              </motion.div>
            </Link>

            <Link to="/stores">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Manage Stores
                </h3>

                <p>
                  View all stores and ratings.
                </p>
              </motion.div>
            </Link>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}