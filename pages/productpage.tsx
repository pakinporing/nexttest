'use client'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';


import EditProduct from '../components/EditProduct';
import Image from 'next/image';
import defaultImg from '../assets/x_letter_letters_alphabet_icon_209006.png';

export default function ProductPage() {
  const { products } = useSelector((state: RootState) => state.products)
  const router = useRouter();
  // const { keyName } = router.query;
  const { name } = router.query;

  // const foundProduct = products.find((el) => el.productName === keyName);
  const foundProduct = products.find((el) => el.productName === name);

  const handleGoBack = () => {
    router.back()
  };

  return (
    <>

      <div className="flex flex-col items-center justify-center gap-8  mb-20">

        {foundProduct && foundProduct.productImg ? (
          <Image
            src={foundProduct.productImg}
            className="w-full h-[500px] object-contain overflow-hidden"
            alt={foundProduct.productName}
            width={500}
            height={500}
          />
        ) : (
          <Image
            src={defaultImg}
            className="w-full h-[500px] object-cover overflow-hidden"
            alt={foundProduct ? foundProduct.productName : ''}
            width={500}
            height={500}
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
          <button className="btn btn-info"
            onClick={handleGoBack}
          >
            ย้อนกลับ
          </button>
          <EditProduct />
        </div>
      </div>
    </>
  );
}
