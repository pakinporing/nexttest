import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addProducts } from "../redux/productsSlice";


export default function DeleteProduct() {
    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch();

    const [dataDelete, setDataDelete] = useState<string>('');

    const deleteProductByProductName = (productNameToDelete: string): void => {
        const productCheck = products.findIndex((el) => el.productName === productNameToDelete)

        if (productCheck == -1) {

            alert('ไม่พบสินค้าที่ต้องการลบ');

        } else {
            const productDataUpdated = products.filter((el: any) => el.productName !== productNameToDelete);



            dispatch(addProducts(productDataUpdated))

            setDataDelete('');

            const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
            if (modal) {
                modal.close();
            }

        }

    }

    return (
        <div>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                    className="btn btn-error"
                    onClick={() => {
                        const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    ลบ
                </button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">ลบ!</h3>
                        <div className="bg-[#ffffff] w-full h-1/2 rounded-[30px] mx-auto p-[20px]">
                            <form className="flex flex-col gap-3 items-stretch">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">
                                            ชื่อสินค้าที่ต้องการลบ โปรดพิมให้ถูกต้อง
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="โปรดพิมชื่อสินค้าที่ต้องการลบให้ถูกต้อง"
                                        value={dataDelete}
                                        className="input input-bordered w-full "
                                        onChange={(e) => setDataDelete(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="btn btn-error"
                                    role="button"
                                    type="button"
                                    onClick={() => {
                                        if (dataDelete !== '') {
                                            deleteProductByProductName(dataDelete);
                                        }
                                    }}
                                >
                                    DELETE
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}
