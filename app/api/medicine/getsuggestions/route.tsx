import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import { Medicine } from "../../../models/medicine.model";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Query must be at least 2 characters long" },
        { status: 400 }
      );
    }

    // Return full medicine objects (not only name)
    const medicines = await Medicine.find({
      name: { $regex: query, $options: "i" }
    })
      .limit(10)
      .lean();

    return NextResponse.json({ success: true, data: medicines });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
