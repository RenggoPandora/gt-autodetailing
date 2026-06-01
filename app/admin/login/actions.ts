"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface LoginState {
  message: string | null;
}

const getSupabaseEnvError = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return "Konfigurasi login admin belum lengkap di server. Periksa environment variables Supabase di Vercel.";
  }

  return null;
};

const getAuthErrorMessage = (error: unknown) => {
  if (!error || typeof error !== "object") {
    return "Terjadi kesalahan. Silakan coba lagi.";
  }

  const message = "message" in error && typeof error.message === "string" ? error.message : "";
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("email not confirmed")) {
    return "Email admin belum diverifikasi di Supabase. Aktifkan Auto Confirm User atau verifikasi email admin tersebut.";
  }

  if (lowerMessage.includes("invalid login credentials")) {
    return "Email atau password salah. Silakan coba lagi.";
  }

  if (message) {
    return `Gagal login admin: ${message}`;
  }

  return "Terjadi kesalahan. Silakan coba lagi.";
};

export async function signIn(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { message: "Email dan password wajib diisi." };
  }

  const envError = getSupabaseEnvError();

  if (envError) {
    console.error("Gagal login admin:", envError);
    return { message: envError };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Supabase menolak login admin:", error);
      return { message: getAuthErrorMessage(error) };
    }
  } catch (error) {
    console.error("Gagal login admin:", error);
    return { message: getAuthErrorMessage(error) };
  }

  redirect("/admin/blog");
}
