import mongoose, { Schema, Document } from "mongoose";

interface IMedicine extends Document {
  shopId: string;
  batchNo: string;
  name: string;
  exp: Date;
  price: number;
  qty: number;
}

const MedicineSchema = new Schema<IMedicine>({
  shopId: { type: String, required: true, index: true },
  batchNo: { type: String, required: true },
  name: { type: String, required: true, index: true },
  exp: { type: Date, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

// export const Medicine = mongoose.model<IMedicine>("Medicine", MedicineSchema);
export const Medicine = (mongoose.models.Medicine as any) || mongoose.model<IMedicine>("Medicine", MedicineSchema);

