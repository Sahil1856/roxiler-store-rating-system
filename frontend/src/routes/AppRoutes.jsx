import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Stores from "../pages/User/Stores";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UserDashboard from "../pages/User/UserDashboard";
import OwnerDashboard from "../pages/Owner/OwnerDashboard";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminStores from "../pages/Admin/AdminStores";
import AddUser from "../pages/Admin/AddUser";
import AddStore from "../pages/Admin/AddStore";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/owner" element={<OwnerDashboard />} />
      <Route path="/users" element={<AdminUsers />} />
      <Route path="/admin-stores" element={<AdminStores />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/add-store" element={<AddStore />} />

    </Routes>
  );
}   