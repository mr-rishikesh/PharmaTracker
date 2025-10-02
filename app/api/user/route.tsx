import { NextRequest , NextResponse } from "next/server";

export async function GET(req:NextRequest) {
        let body;
    try {
      body = await req.json();
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 } // Bad Request
      );
    }
  return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
}

export async function POST() {
  return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
}