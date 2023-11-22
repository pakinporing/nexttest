import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addProducts } from '../../redux/productsSlice';
import Link from 'next/link';

export default function EditProductDialog() {
    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch();
    const router = useRouter();
    const { name } = router.query;

    const foundProduct = products.find((el) => el.productName === name);

    interface FormData {
        productName: string;
        productDetail: string;
        price: any;
        productImg: any
    }

    const [formData, setFormData] = useState<FormData>({
        productName: '',
        productDetail: '',
        price: '',
        productImg: null
    });

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

    const handleSave = () => {

        if (foundProduct) {

            const productIndex = products.findIndex(
                (el) => el.productName === foundProduct.productName
            );

            if (productIndex !== -1) {

                const updatedProduct = {
                    ...foundProduct,
                    productName: formData.productName,
                    productDetail: formData.productDetail,
                    price: parseInt(formData.price),
                    productImg: formData.productImg
                };

                const updatedProducts = [...products];

                updatedProducts[productIndex] = updatedProduct;


                dispatch(addProducts(updatedProducts));

                router.back()
            }
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files ? e.target.files[0] : null;

        if (imageFile) {
            const reader = new FileReader();

            reader.onload = (event) => {

                const base64Data = event.target!.result;

                setFormData({ ...formData, productImg: base64Data });
            };

            reader.readAsDataURL(imageFile);
        }
    }

    return (
        <div> <button
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
                                <Link
                                    href={{
                                        pathname: '/Home',
                                        query: { name: `${name}` },
                                    }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        // onChange={handleImageChange}
                                        className="file-input file-input-bordered w-full max-w-xs"
                                    />
                                </Link>
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
                                            price: e.target.value
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
            </dialog></div>
    )
}
