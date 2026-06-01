import type { Metadata } from "next";

import { AdminLoginTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "Login Admin",
  description: "Masuk ke panel admin GT Autodetailing.",
};

const AdminLoginPage = () => {
  return <AdminLoginTemplate />;
};

export default AdminLoginPage;
