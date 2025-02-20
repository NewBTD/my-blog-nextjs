export const runtime = "nodejs"; // ✅ Ensure Node.js runtime

import dbConnect from "@/lib/mongoose";
import Blog from "@/models/Blog";
import { NextResponse, NextRequest } from "next/server";

//Todo: Made PUT,DELETE routes

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching blogs", message: error },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  //Temp
  try {
    const body = await request.json();
    await dbConnect();
    const newBlog = await Blog.create(body);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello from Next.js", body });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello from Next.js", body });
}
