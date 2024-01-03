import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/BreadCrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Footer from '../components/Footer/Footer';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Products = () => {
    const {all_product} =useContext(ShopContext);
    const{productId}=useParams();
    const product=all_product.find((e)=> e.id===Number(productId))
    // const product = all_product[0];

    console.log("This is my : ",all_product);
    console.log("product: ",product);
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
        <Footer/>

        
    </div>
  )
}

export default Products
