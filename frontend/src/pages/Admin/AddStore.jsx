import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import API from "../../services/api";

export default function AddStore() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
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
      await API.post("/stores", formData);

      alert("Store Added Successfully");

      setFormData({
        name: "",
        email: "",
        address: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed To Add Store");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-10 max-w-3xl">

        <h1 className="text-5xl font-bold mb-8">
          Add Store
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Store Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Store Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

          <input
            type="text"
            name="address"
            placeholder="Store Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
          />

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
            Add Store
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}