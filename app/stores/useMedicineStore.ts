import {create} from "zustand"

interface BillMedicineItem {
  sNo: number;
  price: number;
  quantity: number;
  medicineName: string;
  batchNo: string;
}

type MedicineStore = {
  billMedicineItems: BillMedicineItem[];
  getSuggestions: (data: any) => Promise<void>;
  addBillItem: (data: object) => void;
};


export const UseMedicineStore = create<MedicineStore>((set , get ) => ({
      
     billMedicineItems :  [],


    getSuggestions : async (data : any) => {
        try {

            
            
        } catch (error) {
            
        }
    },
    addBillItem  :  (data : object) => set((state : any) => ({billMedicineItems :  [...state.billMedicineItems , data]}))
}))