'use client'
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { loadData } from "../services/api";
import { useEffect, useState } from "react";



export default function Product() {
    const [product, setProduct] = useState([]);

    const handleData = async () => {
        const result = await loadData('https://webprotec.org/ecommerce/api/v1/products')
        const { products } = result
        setProduct(products)
        // console.log(product, 'productloaded')
    }
    // console.log(product, 'productloaded')
    useEffect(() => {
        handleData()
    }, [])
    // console.log(item, 'productPage');
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar product={product} setProduct={setProduct} />
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                product && product.length > 0 && product.slice(1).map((product) => {
                                    return (
                                        <div className="col-lg-4">
                                            <ProductCard data={product} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}