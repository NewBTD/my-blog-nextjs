export const runtime = "nodejs"; // ✅ Ensure Node.js runtime

import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import Blog from "@/models/Blog";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  try {
    await dbConnect();
    const { slug } = await params;
    console.log("Hello this is " + slug);
    if (!slug) {
      return NextResponse.json({ message: "Slug is required" });
    }
    const blog = await Blog.findOne({ slug:slug });
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
