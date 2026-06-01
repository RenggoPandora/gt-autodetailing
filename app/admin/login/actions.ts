"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface LoginState {
  message: string | null;
}

export async function signIn(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { message: "Email dan password wajib diisi." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return { message: "Email atau password salah. Silakan coba lagi." };
    }
  } catch (error) {
    console.error("Gagal login admin:", error);
    return { message: "Terjadi kesalahan. Silakan coba lagi." };
  }

  redirect("/admin/blog");
}
