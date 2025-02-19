"use server";

import User from "@/models/User";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) throw new Error("Please fill all the fields");

  const exisistingUser = await User.findOne({ email });
  if (exisistingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  revalidatePath("/");
}
