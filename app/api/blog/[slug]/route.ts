import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import Blog from "@/models/Blog";

// export const GET = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   try {
//     console.log(await params);
//     await dbConnect();

//     const blog = await Blog.findOne({ slug: params.slug });
//     return NextResponse.json(blog, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// };

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  await dbConnect();
  const { slug } = await params;
  console.log("Hello this is " + slug);
  if (!slug) {
    return NextResponse.json({ message: "Slug is required" });
  }
//   const blog = await Blog.findOne({ slug });
//   let user;
//   if (slug.match(/^[0-9a-fA-F]{24}$/)) {
//     user = await User.findById(slug);
//   } else {
//     user = await User.findOne({ name: slug });
//   }
  return NextResponse.json({ "ok": "ok" });
};
