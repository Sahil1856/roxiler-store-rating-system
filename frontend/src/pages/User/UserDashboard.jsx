import DashboardLayout from "../../layouts/DashboardLayout";
import BackgroundGlow from "../../components/BackgroundGlow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function UserDashboard() {
  const [stats, setStats] = useState({
    totalStores: 0,
    totalRatings: 0,
    avgRating: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await API.get("/dashboard");

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <BackgroundGlow />

      <div className="p-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            Welcome Back
          </h1>

          <p className="text-slate-400 text-lg mb-12">
            Discover stores, submit ratings and manage your profile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            p-8
            rounded-3xl
            shadow-xl
            "
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
            transition={{ duration: 0.25 }}
            className="
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            p-8
            rounded-3xl
            shadow-xl
            "
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
            transition={{ duration: 0.25 }}
            className="
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            p-8
            rounded-3xl
            shadow-xl
            "
          >
            <p className="text-slate-400 mb-3">
              Average Rating
            </p>

            <h2 className="text-5xl font-bold text-yellow-400">
              ⭐ {stats.avgRating || 0}
            </h2>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
          mt-12
          bg-white/[0.03]
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          "
        >
          <h2 className="text-2xl font-semibold mb-6">
            Platform Overview
          </h2>

          <div className="space-y-4">

            <div className="border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-all duration-300">
              Total Stores Available: {stats.totalStores}
            </div>

            <div className="border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-all duration-300">
              Total Ratings Submitted: {stats.totalRatings}
            </div>

            <div className="border border-white/5 rounded-2xl p-4 hover:bg-white/5 transition-all duration-300">
              Platform Average Rating: ⭐ {stats.avgRating || 0}
            </div>

          </div>

        </motion.div>

      </div>
    </DashboardLayout>
  );
}