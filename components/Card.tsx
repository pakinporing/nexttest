// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import defaultImg from '../assets/x_letter_letters_alphabet_icon_209006.png';

// export default function Card({ productImg, productName, id, productDetail }) {
//   const navigate = useNavigate();

//   const imageUrl =
//     productImg instanceof File ? URL.createObjectURL(productImg) : productImg;

//   return (
//     <>
//       <div
//         className="w-full h-[200px] bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer m-2"
//         role="button"
//         onClick={() => {
//           navigate(`/product/${productName}`);
//         }}
//       >
//         <div className="flex w-full h-full">
//           {imageUrl ? (
//             <img
//               className="w-1/2  object-cover overflow-hidden"
//               src={imageUrl}
//               alt={productName}
//             />
//           ) : (
//             <img
//               className="w-1/2  object-cover overflow-hidden"
//               src={defaultImg}
//               alt={productName}
//             />
//           )}

//           <div className="w-1/2 flex flex-col items-start gap-[1px] p-[8px] overflow-hidden justify-items-center">
//             <div className="text-xl font-bold text-blue-500 overflow-hidden w-[95%]">
//               {productName}
//             </div>

//             <div className=" text-sm h-[150px] w-full overflow-hidden whitespace-pre-wrap break-words">
//               {productDetail}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import defaultImg from '../assets/x_letter_letters_alphabet_icon_209006.png';

interface CardProps {
  productImg: File | string;
  productName: string;
  id: number;
  productDetail: string;
}

const Card: React.FC<CardProps> = ({ productImg, productName, id, productDetail }) => {
  const navigate = useNavigate();

  const imageUrl =
    productImg instanceof File ? URL.createObjectURL(productImg) : (productImg as string);

  return (
    <div
      className="w-full h-[200px] bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer m-2"
      role="button"
      onClick={() => {
        navigate(`/product/${productName}`);
      }}
    >
      <div className="flex w-full h-full">
        {imageUrl ? (
          <img
            className="w-1/2  object-cover overflow-hidden"
            src={imageUrl}
            alt={productName}
          />
        ) : (
          <Image
            className="w-1/2  object-cover overflow-hidden"
            src={defaultImg}
            alt={productName}
          />
        )}

        <div className="w-1/2 flex flex-col items-start gap-[1px] p-[8px] overflow-hidden justify-items-center">
          <div className="text-xl font-bold text-blue-500 overflow-hidden w-[95%]">
            {productName}
          </div>

          <div className=" text-sm h-[150px] w-full overflow-hidden whitespace-pre-wrap break-words">
            {productDetail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
