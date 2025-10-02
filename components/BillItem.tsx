interface BillItems {
    sNo :number ,
    medicineName: string ,
    quantity : number,
    price : number
}
export default function BillItem(data :BillItems ) {
    const {sNo  , medicineName , quantity ,  price} = data;
    return (
        <>
                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">{sNo}</td>
                  {/* <td className="px-4 py-2">Amoxicillin</td> */}
                  <td className="px-4 py-2">{medicineName}</td>
                  <td className="px-4 py-2">{quantity}</td>
                  <td className="px-4 py-2">{price}</td>
                </tr>
        </>
    )
}