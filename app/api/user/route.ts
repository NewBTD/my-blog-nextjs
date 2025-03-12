import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { IUser } from "../../../models/User";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection<IUser>("users").find().toArray();
    return NextResponse.json(users, { status: 200 });
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
