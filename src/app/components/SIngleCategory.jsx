import Link from 'next/link';
import * as React from 'react';


export default function SingleCategory(){
    return (
        <>
        <div className="card text-center m-3 p-4">
            <a href='' className='text-decoration-none text-secondary'>
                <span className='img-box'>
                    <img src="http://ecommerce.webprotec.org/assets/uploads/media-uploader/011649652302.png" alt="" />
                    <span className='number'>1</span>
                </span>
                <span className='content d-block'>Hand Bag</span>
               
            </a>
        </div>
        </>
    )
}