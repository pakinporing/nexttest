// import { createContext, useState } from 'react';
// import samsungImg from '../assets/samsung.jpg';
// import nokiaImg from '../assets/nokia.jpg';
// import iphoneTmg from '../assets/iPhone-12-64GB.jpg';
// import xiaomiImg from '../assets/Xiaomi-Smartphone-Redmi-Note-11-Pro-Graphite-Gray-1-square_medium.webp';

// export const DataProductContext = createContext();

// export default function DataProductContextProvider({ children }) {
//   let productData = [
//     {
//       id: 1,
//       productName: 'samsung',
//       productDetail:
//         'Galaxy Z Flip ของเรา ที่เล็กที่สุด พกพาง่ายกว่าเดิม สมาร์ทโฟนที่ให้ประสบการ์ณการเซลฟี่ ได้ดีที่สุดของ Samsung Galaxy จอนอกใหญ่ที่สุดของ Galaxy Z Flip',
//       productImg: samsungImg,
//       price: 20000
//     },
//     {
//       id: 2,
//       productName: 'nokia',
//       productDetail:
//         'หน้าจอ TFT ขนาด 1.8 นิ้วซึ่งให้ภาพที่คมชัด สบายตา นอกจากนี้แล้วก็ยังสามารถเชื่อมต่อแบบ 4G และยังรองรับ LTE ซึ่งจะมีผลทำให้คุณภาพของเสียงนั้นคมชัดระดับ HD นั่นเองครับ ',
//       productImg: nokiaImg,
//       price: 12000
//     },
//     {
//       id: 3,
//       productName: 'iphone',
//       productDetail:
//         'ระบบกล้องระดับโปร  กล้องหลัก 48MP อัลตร้าไวด์ เทเลโฟโต้  ภาพถ่ายความละเอียดสูงเป็นพิเศษ (24MP และ 48MP)  ภาพถ่ายบุคคลเจเนอเรชั่นถัดไปพร้อมการควบคุมโฟกัสและระยะชัดลึก',
//       productImg: iphoneTmg,
//       price: 35000
//     },
//     {
//       id: 4,
//       productName: 'xiaomi',
//       productDetail:
//         'bnn.in.th จำหน่ายโทรศัพท์มือถือยี่ห้อ Realme (เรียลมี) ทุกรุ่น อัปเดตใหม่ล่าสุดทุกตัว ของแท้มีประกัน รองรับ 5G และมีให้เลือกหลายรุ่น Realme 8 (5G), C25, C21, Narzo 20 Pro, Realme 7 Pro เครื่องเร็ว สเปคแรง เล่นเกมลื่น แถมกล้องเทพ ถ่ายภาพสวย ราคาถูก ',
//       productImg: xiaomiImg,
//       price: 18000
//     }
//   ];

//   const [product, setProduct] = useState(productData);

//   return (
//     <DataProductContext.Provider value={{ product, setProduct }}>
//       {children}
//     </DataProductContext.Provider>
//   );
// }

// import { createContext, useState, ReactNode } from 'react';
// import samsungImg from '../assets/samsung.jpg';
// import nokiaImg from '../assets/nokia.jpg';
// import iphoneTmg from '../assets/iPhone-12-64GB.jpg';
// import xiaomiImg from '../assets/Xiaomi-Smartphone-Redmi-Note-11-Pro-Graphite-Gray-1-square_medium.webp';

// interface Product {
//   id?: number;
//   productName: string;
//   productDetail: string;
//   productImg: any;
//   price: number;
// }

// interface DataProductContextType {
//   product: Product[];
//   setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
// }

// export const DataProductContext = createContext<any>();

// interface DataProductContextProviderProps {
//   children: ReactNode;
// }

// export default function DataProductContextProvider({ children }: DataProductContextProviderProps) {

//   const productData: Product[] = [
//     {
//       id: 1,
//       productName: 'samsung',
//       productDetail:
//         'Galaxy Z Flip ของเรา ที่เล็กที่สุด พกพาง่ายกว่าเดิม สมาร์ทโฟนที่ให้ประสบการ์ณการเซลฟี่ ได้ดีที่สุดของ Samsung Galaxy จอนอกใหญ่ที่สุดของ Galaxy Z Flip',
//       productImg: samsungImg,
//       price: 20000
//     },
//     {
//       id: 2,
//       productName: 'nokia',
//       productDetail:
//         'หน้าจอ TFT ขนาด 1.8 นิ้วซึ่งให้ภาพที่คมชัด สบายตา นอกจากนี้แล้วก็ยังสามารถเชื่อมต่อแบบ 4G และยังรองรับ LTE ซึ่งจะมีผลทำให้คุณภาพของเสียงนั้นคมชัดระดับ HD นั่นเองครับ ',
//       productImg: nokiaImg,
//       price: 12000
//     },
//     {
//       id: 3,
//       productName: 'iphone',
//       productDetail:
//         'ระบบกล้องระดับโปร  กล้องหลัก 48MP อัลตร้าไวด์ เทเลโฟโต้  ภาพถ่ายความละเอียดสูงเป็นพิเศษ (24MP และ 48MP)  ภาพถ่ายบุคคลเจเนอเรชั่นถัดไปพร้อมการควบคุมโฟกัสและระยะชัดลึก',
//       productImg: iphoneTmg,
//       price: 35000
//     },
//     {
//       id: 4,
//       productName: 'xiaomi',
//       productDetail:
//         'bnn.in.th จำหน่ายโทรศัพท์มือถือยี่ห้อ Realme (เรียลมี) ทุกรุ่น อัปเดตใหม่ล่าสุดทุกตัว ของแท้มีประกัน รองรับ 5G และมีให้เลือกหลายรุ่น Realme 8 (5G), C25, C21, Narzo 20 Pro, Realme 7 Pro เครื่องเร็ว สเปคแรง เล่นเกมลื่น แถมกล้องเทพ ถ่ายภาพสวย ราคาถูก ',
//       productImg: xiaomiImg,
//       price: 18000
//     }
//   ];

//   const [product, setProduct] = useState<Product[]>(productData);

//   // if (DataProductContext === undefined) {
//   //   return null;
//   // }

//   return (
//     <DataProductContext.Provider value={{ product, setProduct }}>
//       {children}
//     </DataProductContext.Provider>
//   );
// }

