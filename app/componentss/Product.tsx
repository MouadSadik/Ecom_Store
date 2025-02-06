import { title } from 'process'
import React from 'react'

const Product = () => {

    const product = [
        { src: "/man1.webp", title: "Green T-Shirt", description: "A short description", price: "300" },
    ]

    return (
        <div className='bg-gray-200 w-[250px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4'>
            <img className='w-full h-[200px] object-cover rounded-t-lg' src={product[0].src} alt="img" />
            <p className='text-gray-800 font-semibold mt-2'>{product[0].title}</p>
            <p className='text-gray-600 text-sm'>{product[0].description}</p>
            <p className='text-gray-800 font-bold mt-2'>{product[0].price} MAD</p>
            <button className='mt-4 w-full py-2 bg-green-500 text-gray-200 font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200'>
                Add To Cart
            </button>
        </div>

    )
}

export default Product