import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function AdminStores() {
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

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-10">

        <h1 className="text-5xl font-bold mb-4">
          Stores
        </h1>

        <input
          type="text"
          placeholder="Search Store..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 mb-8 rounded-2xl bg-white/5 border border-white/10 text-white"
        />

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left">Store Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Rating</th>
              </tr>
            </thead>

            <tbody>

              {filteredStores.map((store) => (
                <tr
                  key={store.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-4">{store.name}</td>
                  <td className="p-4">{store.email}</td>
                  <td className="p-4">{store.address}</td>
                  <td className="p-4">
                    ⭐ {store.avg_rating || 0}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}