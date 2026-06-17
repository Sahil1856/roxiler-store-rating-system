import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { motion } from "framer-motion";

export default function Stores() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await API.get("/stores");
      setStores(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 const submitRating = async (storeId, rating) => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please login first");
      return;
    }

    await API.post("/ratings", {
      user_id: user.id,
      store_id: storeId,
      rating,
    });

    alert(`You rated ${rating} stars`);

    fetchStores();
  } catch (error) {
    console.log(error);
    alert("Rating Failed");
  }
};

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-5xl font-bold mb-3">
          Stores
        </h1>

        <p className="text-slate-400 mb-8">
          Browse and rate stores available on the platform.
        </p>

        <input
          type="text"
          placeholder="Search Store By Name Or Address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            p-4
            mb-8
            rounded-2xl
            bg-white/[0.03]
            border
            border-white/10
            text-white
            outline-none
          "
        />

        <div className="grid md:grid-cols-2 gap-6">
          {filteredStores.map((store) => (
            <motion.div
              key={store.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="
                relative
                overflow-hidden
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
                shadow-xl
                group
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-r
                  from-indigo-500/10
                  to-cyan-500/10
                "
              />

              <div className="relative z-10">
                <img
                  src={`https://picsum.photos/500/220?random=${store.id}`}
                  alt="store"
                  className="w-full h-48 object-cover rounded-2xl mb-5"
                />

                <h2 className="text-2xl font-bold mb-2">
                  {store.name}
                </h2>

                <p className="text-slate-400 mb-4">
                  {store.address}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">
                      Overall Rating
                    </p>

                    <p className="text-3xl font-bold text-yellow-400">
                      ⭐ {store.avg_rating || "0.0"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-2">
                      Rate This Store
                    </p>

                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.span
                          key={star}
                          whileHover={{
                            scale: 1.25,
                          }}
                          whileTap={{
                            scale: 0.9,
                          }}
                          onClick={() =>
                            submitRating(store.id, star)
                          }
                          className="
                            cursor-pointer
                            text-3xl
                            text-slate-400
                            hover:text-yellow-400
                            transition-all
                            duration-200
                          "
                        >
                          ☆
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}