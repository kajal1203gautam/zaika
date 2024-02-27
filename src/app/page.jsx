'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import SingleCategory from "./components/SingleCategory";
import NewArrival from "./components/NewArrival";
import ProductCard from "./components/ProductCard";
import { loadData } from "./services/api";
import { useState, useEffect } from 'react';



export default function Home() {
  const [product, setProduct] = useState([]);


  const handleData = async () => {
    const result = await loadData('https://webprotec.org/ecommerce/api/v1/products');
    const {products} = result
    setProduct(products)
    console.log(products, 'product');
  }
  console.log(product, 'setProduct');
  useEffect(() => {
    handleData();
  }, [])
  return (
    <>
      <Hero />
      <div className="container pt-5">
       <div className="row">
       <SingleCategory />
       </div>
      </div>
      <NewArrival />
      <div className="container">
        <div className="row mb-3 mt-4">
          <div className="col-lg-8">
            <div className="row">
              {
                  product && product.length && product.slice(1,7).map((item)=>{
                    return (
                      <div className="col-lg-4 d-flex" >
                        <ProductCard data={item} />
                      </div>
                    )
                  })
              }
            </div>
            {/* <div className="row">
              <div className="col-lg-4">
                <ProductCard />
              </div>
              <div className="col-lg-4">
                <ProductCard />
              </div>
              <div className="col-lg-4">
                <ProductCard />
              </div>
            </div> */}

          </div>
          <div className="col-lg-4">
            <img src="/images/img1.jpg" alt="" className="img-fluid" />
          </div>
        </div>

      </div>


    </>
  );
}
