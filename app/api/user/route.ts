import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;
  await dbConnect();
  //* Still Wrong!! password is not hashed or switch to server actions
  const newUser = await User.create({ name, email, password });
  if (newUser) {
    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { message: "User creation failed" },
      { status: 500 }
    );
  }
}
