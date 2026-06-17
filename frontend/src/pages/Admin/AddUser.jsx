import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import API from "../../services/api";

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users", formData);

      alert("User Added Successfully");

      setFormData({
        name: "",
        email: "",
        address: "",
        password: "",
        role: "USER",
      });
    } catch (error) {
      console.log(error);
      alert("Failed To Add User");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-10 max-w-3xl">

        <h1 className="text-5xl font-bold mb-8">
          Add User
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-slate-900 border border-white/10 text-white"
          >
            <option value="USER">USER</option>
            <option value="OWNER">OWNER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button
            type="submit"
            className="
            w-full
            p-4
            rounded-2xl
            bg-indigo-600
            hover:bg-indigo-500
            text-white
            font-semibold
            "
          >
            Add User
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}