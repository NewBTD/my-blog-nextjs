"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import * as argon2 from "argon2";
import { UserType } from "@/types/User";

export async function signUp(formData: FormData | UserType) {
  const name = formData instanceof FormData ? formData.get("name") as string : formData.name;
  const email = formData instanceof FormData ? formData.get("email") as string : formData.email;
  const password = formData instanceof FormData ? formData.get("password") as string : formData.password;

  if (!email || !password || !name) throw new Error("Please fill all the fields");

  const { db } = await connectToDatabase();

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await argon2.hash(password);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  revalidatePath("/");
}
