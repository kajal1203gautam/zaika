'use client'
import * as React from 'react';
import { loadData } from '../services/api';
import { useEffect, useState } from 'react';

export default function SingleCategory() {
    const [category, setCategory] = useState([]);

    const handleData = async () => {
        try {
            const result = await loadData('https://webprotec.org/ecommerce/api/v1/category');
            const {categories} =result
            console.log(categories, 'result');
            setCategory(categories);

        } catch (error) {
            console.error(error, 'error');
        }
    }

    useEffect(() => {
        handleData();
    }, [])

    return (
        <>
            {category.length > 0 && category.filter((item)=>item.image_url).slice(0,12).map((m) => (
                <div className="col-lg-2">
                    <div className="card text-center m-3 p-4" key={m?.id}>
                        <a href='' className='text-decoration-none text-secondary'>
                            <span className='img-box'>
                                <img src={m?.image_url} alt="" className='img-fluid' />
                                <span className='number'>1</span>
                            </span>
                            <span className='content d-block'>{m?.title}</span>
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}
