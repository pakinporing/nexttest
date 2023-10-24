import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDataProduct from '../hooks/useDataProduct';
import Image from 'next/image';
import defaultImg from '../assets/x_letter_letters_alphabet_icon_209006.png';

export default function ProductPage() {
  const navigate = useNavigate();
  const { params } = useParams();
  const dataProduct = useDataProduct();
  if (!dataProduct) {
    return null;
  }

  const { product, setProduct } = dataProduct;

  const [formData, setFormData] = useState({
    productName: '',
    productDetail: '',
    price: 0,
    productImg: null
  });

  const foundProduct = product.find((el) => el.productName === params);

  useEffect(() => {
    if (foundProduct) {
      setFormData({
        productName: foundProduct.productName,
        productDetail: foundProduct.productDetail,
        price: foundProduct.price,
        productImg: foundProduct.productImg || null
      });
    }
  }, [foundProduct]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    if (foundProduct) {
      const productIndex = product.findIndex(
        (el) => el.productName === foundProduct.productName
      );

      if (productIndex !== -1) {
        const updatedProduct = {
          ...foundProduct,
          productName: formData.productName,
          productDetail: formData.productDetail,
          price: formData.price,
          productImg: formData.productImg
        };

        const updatedProducts = [...product];
        updatedProducts[productIndex] = updatedProduct;

        setProduct(updatedProducts);

        navigate(-1);
      }
    }
  };

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, productImg: imageFile }); // เพิ่มการจัดเก็บรูปภาพเมื่อมีการเลือกไฟล์
  };

  const imageUrl =
    foundProduct && foundProduct.productImg instanceof File
      ? URL.createObjectURL(foundProduct.productImg)
      : foundProduct && foundProduct.productImg;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8  mb-20">
        {foundProduct && foundProduct.productImg ? (
          <img
            src={imageUrl}
            className="w-full h-[500px] object-contain overflow-hidden"
            alt={foundProduct.productName}
          />
        ) : (
          <Image
            src={defaultImg}
            className="w-full h-[500px] object-cover overflow-hidden"
            alt={foundProduct ? foundProduct.productName : ''}
          />
        )}

        <div className="text-xl font-bold text-blue-600 overflow-hidden whitespace-pre-wrap break-words">
          {foundProduct ? foundProduct.productName : ''}
        </div>
        <div className="text-sm w-80 mx-auto p-[12px] overflow-hidden whitespace-pre-wrap break-words">
          {foundProduct ? foundProduct.productDetail : ''}
        </div>

        <div className="text-xl font-bold text-black overflow-hidden whitespace-pre-wrap break-words">
          ราคา {foundProduct ? foundProduct.price : ''}
        </div>
        <div className="flex items-center justify-space-evenly gap-8 h-full">
          <button className="btn btn-info" onClick={handleGoBack}>
            ย้อนกลับ
          </button>

          <button
            className="btn btn-warning"
            onClick={() => {
              const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            แก้ไข
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">แก้ไข!</h3>
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
                      <span className="label-text">แก้ไขชื่อสินค้า</span>
                    </label>
                    <input
                      type="text"
                      placeholder="แก้ชื่อสินค้า"
                      value={formData.productName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          productName: e.target.value
                        })
                      }
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">แก้ไขราคา</span>
                    </label>
                    <input
                      type="text"
                      placeholder="แก้ราคาสินค้า"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: parseInt(e.target.value, 10)
                        })
                      }
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">แก้ไขคำอธิบาย</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24 resize-none"
                      placeholder="แก้ไขคำอธิบายของคุณ"
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
                    onClick={handleSave}
                  >
                    SAVE
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
