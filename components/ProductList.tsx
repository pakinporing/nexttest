import Card from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function ProductList() {



  const { products } = useSelector((state: RootState) => state.products)

  // console.log(products, 'productsList')

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

    </>

  );
}
