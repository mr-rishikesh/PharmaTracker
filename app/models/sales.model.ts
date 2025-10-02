

import mongoose , {Document , Schema} from "mongoose";

interface ISales extends Document {
    shopId : string ,
    total_price : string ,
    sale_items: [],
    email : string ,
    patient_name : string

}

const SalesSchema = new Schema<ISales>({
  shopId: { type: String, required: true, index: true },
  total_price: { type: String, required: true },
  patient_name: { type: String, required: true, index: true },
 
  email: { type: String},
  sale_items: { type: [], required: true },
})

export const Sales = mongoose.model<ISales>("Sales", SalesSchema);