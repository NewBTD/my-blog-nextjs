import { NextResponse,NextRequest } from "next/server";

//Todo: Made GET,POST,PUT,DELETE routes

export async function GET(){
    return NextResponse.json({message:'Hello from Next.js'})
}

export async function POST(request:NextRequest){
    const body = await request.json()
    return NextResponse.json({message:'Hello from Next.js',body})
}

export async function PUT(request:NextRequest){
    const body = await request.json()
    return NextResponse.json({message:'Hello from Next.js',body})
}

export async function DELETE(request:NextRequest){
    const body = await request.json()
    return NextResponse.json({message:'Hello from Next.js',body})
}