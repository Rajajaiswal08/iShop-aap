import React, { useEffect, useState } from 'react'
import Productlist from '../../Comonent/Productlist'
import Catigery from '../../Comonent/Catigery';
import { useParams } from 'react-router-dom';


function Store() {
    const[product,setProduct] = useState([]);
    const { slug } = useParams();


    const getProduct = async () => {
      let resp ;
      if(slug == null){
        resp = await fetch('https://dummyjson.com/products');

      }else{
        resp = await fetch(`https://dummyjson.com/products/category/${slug}`);


      }
      const data = await resp.json();
      setProduct(data.products);
    };
   

    useEffect(
      ()=>{
        getProduct();
     
      },[slug]
    )
      const display = product.map(
        (prod) =>{
          return <Productlist key={prod.id} id={prod.id} img={prod.thumbnail} name={prod.title} rating={prod.rating}/>
        }
      )


  return (
    <div>
        

          {/* product listing */}

          <div className='max-w-[1190px] mx-auto flex flex-col gap-5 md:flex-row  overflow-hidden mt-7'>
            <div className='md:w-[30%] w-[100%] mt-6 md:mt-0'>
                  <Catigery/>
            </div>
            <div className='md:w-[70%] mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-3 mb-4 gap-6'>
                       {
                       display
                     }
                   </div>


          </div>
         
    </div>
  )
}

export default Store