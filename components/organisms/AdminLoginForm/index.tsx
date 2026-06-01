"use client";

import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { signIn, type LoginState } from "@/app/admin/login/actions";

const initialState: LoginState = { message: null };

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      label={pending ? "Memproses..." : "Masuk Admin"}
      type="submit"
      disabled={pending}
    />
  );
};

const AdminLoginForm = () => {
  const [state, formAction] = useFormState(signIn, initialState);

  return (
    <form className="space-y-6" action={formAction}>
      <FormField
        id="email"
        label="Email Admin"
        type="email"
        placeholder="admin@gtautodetailing.com"
        autoComplete="email"
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Masukkan password"
        autoComplete="current-password"
      />
      {state.message ? <p className="text-xs text-red-200">{state.message}</p> : null}
      <SubmitButton />
    </form>
  );
};

export default AdminLoginForm;
