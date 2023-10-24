import React, { useState, ChangeEvent } from 'react';

export default function AddProduct() {

  interface FormData {
    productName: string;
    productDetail: string;
    price: string;
    productImg: File | null;
  }

  const [formData, setFormData] = useState<FormData>({
    productName: '',
    productDetail: '',
    price: '',
    productImg: null
  });






  // const handleClickSave = () => {

  //  const newProduct = {
  //       productName: formData.productName,
  //       productDetail: formData.productDetail,
  //       price: formData.price,
  //       productImg: formData.productImg // เพิ่ม productImg ลงในรายการผลิตภัณฑ์
  //     };

  //     const newP: any = [...product, newProduct];

  //     setProduct(newP);

  //     setFormData({
  //       productName: '',
  //       productDetail: '',
  //       price: '',
  //       productImg: null // รีเซ็ต productImg เมื่อบันทึกเสร็จ
  //     });

  //     const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
  //     if (modal) {
  //       modal.close();
  //     }
  //   }
  // }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, productImg: imageFile });
  }


  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-success"
        onClick={() => {
          const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        เพิ่ม
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">เพิ่ม!</h3>

          <div className="bg-[#ffffff] w-full h-1/2 rounded-[30px] mx-auto p-[20px]">
            <form className="flex flex-col gap-3 items-stretch">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">เลือกรูปภาพ</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">ชื่อสินค้า</span>
                </label>
                <input
                  type="text"
                  placeholder="เพิ่มชื่อสินค้าที่คุณต้องการ"
                  value={formData.productName}
                  className="input input-bordered w-full "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productName: e.target.value
                    })
                  }
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">ราคา</span>
                </label>
                <input
                  type="text"
                  placeholder="เพิ่มราคาสินค้าที่คุณต้องการ"
                  value={formData.price}
                  className="input input-bordered w-full "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value
                    })
                  }
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">คำอธิบาย</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 resize-none"
                  placeholder="เพิ่มคำอธิบายของคุณ"
                  value={formData.productDetail}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productDetail: e.target.value
                    })
                  }
                ></textarea>
              </div>

              <button
                className="btn btn-success"
                role="button"
                type="button"
              // onClick={handleClickSave}
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

  )
}
