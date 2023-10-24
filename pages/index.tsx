// import Header from '../components/Header';
// import ProductList from '../components/ProductList';
// import useDataProduct from '../hooks/useDataProduct';
// import React, { useState } from 'react';

// export default function HomePage() {
//   const { product, setProduct } = useDataProduct();

//   const [formData, setFormData] = useState({
//     productName: '',
//     productDetail: '',
//     price: '',
//     productImg: null
//   });

//   const [dataDelete, setDataDelete] = useState('');

//   const handleClickSave = () => {
//     const newProduct = {
//       productName: formData.productName,
//       productDetail: formData.productDetail,
//       price: formData.price,
//       productImg: formData.productImg // เพิ่ม productImg ลงในรายการผลิตภัณฑ์
//     };

//     const newP = [...product, newProduct];

//     setProduct(newP);

//     setFormData({
//       productName: '',
//       productDetail: '',
//       price: '',
//       productImg: null // รีเซ็ต productImg เมื่อบันทึกเสร็จ
//     });

//     const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
//     modal.close();
//   };

//   const deleteProductByProductName = (productNameToDelete: string): void => {
//     const productDataUpdated = product.filter((el: any) => el.productName !== productNameToDelete);

//     setProduct(productDataUpdated);

//     setDataDelete('');

//     const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
//     if (modal) {
//       modal.close();
//     }
//   };




//   const handleImageChange = (e: any) => {
//     const imageFile = e.target.files[0];
//     setFormData({ ...formData, productImg: imageFile }); // เพิ่มการจัดเก็บรูปภาพเมื่อมีการเลือกไฟล์
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex flex-col items-center justify-center gap-10">
//         <div className="text-3xl font-bold text-blue-600">PRODUCTS</div>
//         <div className="flex items-center justify-space-evenly gap-8 h-full">
//           <div>
//             {/* You can open the modal using document.getElementById('ID').showModal() method */}
//             <button
//               className="btn btn-success"
//               onClick={() => document.getElementById('my_modal_3') as HTMLDialogElement showModal()}
//             >
//               เพิ่ม
//             </button>
//             <dialog id="my_modal_3" className="modal">
//               <div className="modal-box">
//                 <form method="dialog">
//                   {/* if there is a button in form, it will close the modal */}
//                   <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                     ✕
//                   </button>
//                 </form>
//                 <h3 className="font-bold text-lg">เพิ่ม!</h3>

//                 <div className="bg-[#ffffff] w-full h-1/2 rounded-[30px] mx-auto p-[20px]">
//                   <form className="flex flex-col gap-3 items-stretch">
//                     <div className="form-control w-full max-w-xs">
//                       <label className="label">
//                         <span className="label-text">เลือกรูปภาพ</span>
//                       </label>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="file-input file-input-bordered w-full max-w-xs"
//                       />
//                     </div>

//                     <div className="form-control w-full ">
//                       <label className="label">
//                         <span className="label-text">ชื่อสินค้า</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="เพิ่มชื่อสินค้าที่คุณต้องการ"
//                         value={formData.productName}
//                         className="input input-bordered w-full "
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             productName: e.target.value
//                           })
//                         }
//                       />
//                     </div>

//                     <div className="form-control w-full ">
//                       <label className="label">
//                         <span className="label-text">ราคา</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="เพิ่มราคาสินค้าที่คุณต้องการ"
//                         value={formData.price}
//                         className="input input-bordered w-full "
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             price: e.target.value
//                           })
//                         }
//                       />
//                     </div>

//                     <div className="form-control">
//                       <label className="label">
//                         <span className="label-text">คำอธิบาย</span>
//                       </label>
//                       <textarea
//                         className="textarea textarea-bordered h-24 resize-none"
//                         placeholder="เพิ่มคำอธิบายของคุณ"
//                         value={formData.productDetail}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             productDetail: e.target.value
//                           })
//                         }
//                       ></textarea>
//                     </div>

//                     <button
//                       className="btn btn-success"
//                       role="button"
//                       type="button"
//                       onClick={handleClickSave}
//                     >
//                       SAVE
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </dialog>
//           </div>
//           <div>
//             {/* You can open the modal using document.getElementById('ID').showModal() method */}
//             <button
//               className="btn btn-error"
//               onClick={() => document.getElementById('my_modal_4').showModal()}
//             >
//               ลบ
//             </button>
//             <dialog id="my_modal_4" className="modal">
//               <div className="modal-box">
//                 <form method="dialog">
//                   {/* if there is a button in form, it will close the modal */}
//                   <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                     ✕
//                   </button>
//                 </form>
//                 <h3 className="font-bold text-lg">ลบ!</h3>
//                 <div className="bg-[#ffffff] w-full h-1/2 rounded-[30px] mx-auto p-[20px]">
//                   <form className="flex flex-col gap-3 items-stretch">
//                     <div className="form-control w-full ">
//                       <label className="label">
//                         <span className="label-text">
//                           ชื่อสินค้าที่ต้องการลบ โปรดพิมให้ถูกต้อง
//                         </span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="โปรดพิมชื่อสินค้าที่ต้องการลบให้ถูกต้อง"
//                         value={dataDelete}
//                         className="input input-bordered w-full "
//                         onChange={(e) => setDataDelete(e.target.value)}
//                       />
//                     </div>

//                     <button
//                       className="btn btn-error"
//                       role="button"
//                       type="button"
//                       onClick={() => {
//                         if (dataDelete !== undefined) {
//                           deleteProductByProductName(dataDelete);
//                         }
//                       }}
//                     >
//                       DELETE
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </dialog>
//           </div>
//         </div>
//         <ProductList />
//       </div>
//     </>
//   );
// }


import Header from '../components/Header';
import ProductList from '../components/ProductList';
import useDataProduct from '../hooks/useDataProduct';
import React, { useState, ChangeEvent, useEffect } from 'react';

interface FormData {
  productName: string;
  productDetail: string;
  price: string;
  productImg: File | null;
}

export default function HomePage() {
  const dataProductContext = useDataProduct();
  const [formData, setFormData] = useState<FormData>({
    productName: '',
    productDetail: '',
    price: '',
    productImg: null
  });
  const [dataDelete, setDataDelete] = useState<string>('');

  useEffect(() => {
    if (dataProductContext) {
      // กำหนดค่าเริ่มต้นของ formData จากค่า product ที่ได้จาก DataProductContext
      setFormData({
        productName: '',
        productDetail: '',
        price: '',
        productImg: null
      });
    }
  }, [dataProductContext]);

  const handleClickSave = () => {
    if (dataProductContext) {
      const { product, setProduct } = dataProductContext;

      const newProduct = {
        productName: formData.productName,
        productDetail: formData.productDetail,
        price: formData.price,
        productImg: formData.productImg // เพิ่ม productImg ลงในรายการผลิตภัณฑ์
      };

      const newP: any = [...product, newProduct];

      setProduct(newP);

      setFormData({
        productName: '',
        productDetail: '',
        price: '',
        productImg: null // รีเซ็ต productImg เมื่อบันทึกเสร็จ
      });

      const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    }
  }

  const deleteProductByProductName = (productNameToDelete: string): void => {
    if (dataProductContext) {
      const { product, setProduct } = dataProductContext;

      const productDataUpdated = product.filter((el: any) => el.productName !== productNameToDelete);

      setProduct(productDataUpdated);

      setDataDelete('');

      const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, productImg: imageFile });
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-3xl font-bold text-blue-600">PRODUCTS</div>
        <div className="flex items-center justify-space-evenly gap-8 h-full">
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
                      onClick={handleClickSave}
                    >
                      SAVE
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
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

        <ProductList />
      </div>
    </>
  );
}

