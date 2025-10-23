import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import { Medicine } from "../../../models/medicine.model";

import { z } from "zod";

const medicineSchema = z.object({
  shopId: z.string(),
  batchNo: z.string(),
  name: z.string(),
  exp: z.coerce.date(),
  price: z.number(),
  qty: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const json = await req.json();
    const data = await medicineSchema.parse(json);

    const existingMedicine = await Medicine.findOne({$and : [ { batchNo: data.batchNo } , {shopId : data.shopId}] });

    if (existingMedicine == null) {
      const newMedicine = await Medicine.create(data);
      if (newMedicine) {
        return NextResponse.json(
          {
            message: " medicine added successfully",
            data: newMedicine,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: "something error in creating user" },
          { status: 400 }
        );
      }
    } else {
      const quantity = existingMedicine.qty + data.qty;
      const updated = await Medicine.findOneAndUpdate(
        {$and : [ { batchNo: data.batchNo } , {shopId : data.shopId}]  },
        { $set: { qty: quantity } },
        { returnDocument: "after" }
      );
      if (updated) {
        return NextResponse.json(
          {
            message: " medicine added successfully",
            data: updated,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: "something error in creating user" },
          { status: 400 }
        );
      }
    }

  
  } catch (error) {
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }
}
