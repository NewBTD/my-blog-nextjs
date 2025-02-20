"use server";

import { auth } from "@/auth";
import Blog from "@/models/Blog";
import { revalidatePath } from "next/cache";

export async function createBlog(formData: FormData) {
  const session = await auth();
  if(!session?.user) throw new Error("You are not authorized to create a blog");
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = formData.get("slug") as string;
  const createdAt = new Date();
  const updated = new Date();
  const author = session?.user?.email || (formData.get("author") as string);
  await Blog.create({
    title,
    content,
    author,
    slug,
    createdAt,
    updatedAt: updated,
    published: true,
    tags: ["", ""],
  });
  revalidatePath("/admin/dashboard");
}
