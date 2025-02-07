"use client"
import React, { useState } from 'react'
import Header from '../componentss/Header'
import Hero from '../componentss/Hero'
import Footer from '../componentss/Footer'
import SearchInput from '../componentss/SerachInput'
import { useCart } from '../context/CartContext'



const Man: any = () => {
  const products = [
    { src: "/man1.webp", title: "Red T-Shirt", description: "A vibrant red t-shirt perfect for casual wear.", price: "250"  },
    { src: "/man2.webp", title: "Blue Jeans", description: "Comfortable blue jeans that go with anything.", price: "450"  },
    { src: "/man3.webp", title: "Black Hoodie", description: "A cozy black hoodie for the cold weather.", price: "350"  },
    { src: "/man4.webp", title: "Leather Jacket", description: "A stylish leather jacket for a chic look.", price: "750"  },
    { src: "/man5.webp", title: "White Sneakers", description: "Simple yet trendy white white sneakers.", price: "400" },
    { src: "/man6.webp", title: "Gray Sweatpants", description: "Comfy gray sweatpants for lounging or workout.", price: "200" },
    { src: "/man7.webp", title: "Graphic T-Shirt", description: "A graphic t-shirt with a very cool design.", price: "300" },
    { src: "/man8.webp", title: "Denim Jacket", description: "A classic denim jacket for an edgy look.", price: "500" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { addToCart } = useCart();

  return (
    <div className=''>
      <Header />
      <div className="flex justify-center p-4 mt-14">
        <SearchInput onSearch={setSearchQuery} />
      </div>
      <div className="flex flex-wrap gap-10 justify-center p-10 pt-5 bg-gray-100">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-gray-200 w-[250px] rounded-lg shadow-md hover:shadow-xl p-4">
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
  );
};

export default Man;
