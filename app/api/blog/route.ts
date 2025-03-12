import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { IBlog } from "../../../models/Blog";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const blogs = await db.collection<IBlog>("blogs").find().toArray();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    let errorMessage = "Something went wrong";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "status" in error) {
      statusCode = (error as { status: number }).status;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello from Next.js", body });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello from Next.js", body });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello from Next.js", body });
}
