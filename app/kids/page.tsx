"use client"
import React, { useState } from 'react'
import Header from '../componentss/Header';
import Footer from '../componentss/Footer';
import SearchInput from '../componentss/SerachInput';
import { useCart } from '../context/CartContext';

const Page = () => {

  const products = [
    { src: "/kids1.webp", title: "Sunny Bear Hat", description: "Cotton Baby Bucket Hat with Drawstring.", price: "250" },
    { src: "/kids2.webp", title: "Happy Panda Cap", description: "Cotton Baby Bucket Hat with Drawstring.", price: "250" },
    { src: "/kids3.webp", title: "Smiley Star Hat", description: "Cotton Baby Bucket Hat with Drawstring.", price: "250" },
    { src: "/kids4.webp", title: "Dino Adventure Hat", description: "Cotton Baby Bucket Hat with Drawstring.", price: "250" },
    { src: "/kids5.webp", title: "Bunny Ears Cap", description: "Cotton Baby Bucket Hat with Drawstring.", price: "300" },
    { src: "/kids6.webp", title: "Ocean Whale Hat", description: "Cotton Baby Bucket Hat with Drawstring.", price: "300" },
    { src: "/kids7.webp", title: "Little Fox Hat", description: "Cotton Baby Bucket Hat with Drawstring.", price: "300" },
    { src: "/kids8.webp", title: "Magic Unicorn Cap", description: "Cotton Baby Bucket Hat with Drawstring.", price: "300" },
  ];
  

  const [searchQuery, setSearchQuery] = useState("")
  
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const { addToCart } = useCart();

  return (
    <div>
      <Header />
      <div className="flex justify-center p-4 mt-14">
        <SearchInput onSearch={setSearchQuery} />
      </div>
      <div className="flex flex-wrap gap-10 justify-center p-10 pt-5 bg-gray-100">
        {filteredProducts.map((product) => (
          <div className="bg-gray-200 w-[250px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
            <img className="w-full h-[250px] object-cover rounded-t-lg" src={product.src} alt={product.title} />
            <p className="text-gray-800 font-semibold mt-2">{product.title}</p>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-gray-800 font-bold mt-2">{product.price} MAD</p>

            <button
              onClick={() => addToCart(product)} 
              className="mt-4 w-full py-2 bg-green-500 text-gray-100 font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200">
                Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Page