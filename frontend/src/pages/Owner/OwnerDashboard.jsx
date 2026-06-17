import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function OwnerDashboard() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    fetchOwnerData();
  }, []);

  const fetchOwnerData = async () => {
    try {
      const res = await API.get("/owner/3");

      setStore(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!store) {
    return (
      <DashboardLayout>
        <div className="p-10 text-white">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-10">

        <h1 className="text-5xl font-bold mb-8">
          Store Owner Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-2">
              Store Name
            </p>

            <h2 className="text-3xl font-bold">
              {store.name}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-2">
              Average Rating
            </p>

            <h2 className="text-5xl font-bold">
              ⭐ {store.avg_rating || 0}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-2">
              Total Ratings
            </p>

            <h2 className="text-5xl font-bold">
              {store.total_ratings}
            </h2>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}