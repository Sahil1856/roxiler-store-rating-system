import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-5xl font-bold mb-4">
          Users
        </h1>

        <p className="text-slate-400 mb-8">
          Manage all registered users
        </p>

        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          p-4
          mb-8
          rounded-2xl
          bg-white/5
          border
          border-white/10
          text-white
          outline-none
          "
        />

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Role</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.address}</td>
                  <td className="p-4">{user.role}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </DashboardLayout>
  );
}