

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import defaultImg from '../assets/x_letter_letters_alphabet_icon_209006.png';

interface CardProps {
  productImg: string;
  productName: string;
  id: number;
  productDetail: string;
}

const Card: React.FC<CardProps> = ({ productImg, productName, id, productDetail }) => {




  return (
    <div
      className="w-full h-[200px] bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer m-2"
      role="button"

    >
      {/* <Link href={`/productpage?keyName=${productName}`} as={`/productpage?keyName=${productName}`}> */}
      <Link
        href={{
          pathname: '/productpage',
          query: { name: `${productName}` },
        }}
      >
        <div className="flex w-full h-full">
          {productImg ? (
            <Image
              className="w-1/2  object-cover overflow-hidden"
              src={productImg}
              alt={productName}
              width={200}
              height={200}
            />
          ) : (
            <Image
              className="w-1/2  object-cover overflow-hidden"
              src={defaultImg}
              alt={productName}
              width={200}
              height={200}
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
      </Link>
    </div>
  );
};

export default Card;
