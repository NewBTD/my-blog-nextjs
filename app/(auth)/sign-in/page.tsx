"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    setError("");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });
    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col ">
      <h2 className="text-2xl pb-8">Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="flex flex-col gap-4 p-4 rounded" action={handleLogin}>
        <input
          className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}