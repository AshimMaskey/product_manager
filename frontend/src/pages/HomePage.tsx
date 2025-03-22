import NoProducts from '@/components/NoProducts';
import ProductCard from '@/components/ProductCard'
import { useProductStore } from '@/store/productStore'
import { useEffect } from 'react';

const HomePage = () => {
  const {products,getProduct}=useProductStore();
  useEffect(()=>{
    getProduct();
  },[]);

  console.log(products);
  
  return (
	<div className='px-20'>
    {
      products.length===0?<NoProducts/>:<ProductCard products={products}/>
    }
  </div>
  )
}

export default HomePage