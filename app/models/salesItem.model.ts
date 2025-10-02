import mongoose , {Schema  , Document} from "mongoose";

interface ISalesItems extends Document {
    shopId : string ,
    saleId : string ,
    medicineId : string ,
    batch_no : string ,
    quantity : Number ,
    total_price: Number
}


const SalesItemSchema =new  Schema<ISalesItems>({
  shopId: { type: String, required: true, index: true },
  total_price: { type: String, required: true },
  medicineId: { type: String, required: true, index: true },
  saleId: { type: String, required: true, index: true },
 
  batch_no: { type: String , required: true},
  quantity: { type:Number, required: true },
})


export const SalesItem = mongoose.model<ISalesItems>("SalesItem" , SalesItemSchema)

