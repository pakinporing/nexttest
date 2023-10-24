import useDataProduct from '../hooks/useDataProduct';
import Card from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function ProductList() {
  const { products } = useSelector((state: RootState) => state.products)

  console.log(products, 'productsRedux')

  // const dataProduct = useDataProduct();
  // if (!dataProduct) {
  //   return null;
  // }

  // const { product, setProduct } = dataProduct;

  // console.log(`หน้าโปรดักลิส ${dataProduct}`)
  // console.log(`หน้าโปรดักลิส1 ${product}`)


  return (
    <>
      <div className="grid gap-x-10 gap-y-3  lg:grid-cols-2 w-4/5 ">
        {products
          .filter((el: any) => el.productName)
          .map((el: any) => (
            <Card
              productImg={el.productImg}
              productName={el.productName}
              productDetail={el.productDetail}
              key={el.productName}
              id={el.id}
            />
          ))}
      </div>
      <h1>หน้าลิสโปรดักก</h1>
    </>

  );
}
