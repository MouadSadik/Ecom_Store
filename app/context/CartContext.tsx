"use client"
import { stringify } from "querystring";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Definition du type pour un produit
interface Product {
  src: string;
  title: string;
  description: string;
  price: string;
}

interface CartElment {
  product: Product;
  key: string;
}

// Definition du type du contexte
interface CartContextType {
  cart: CartElment[];
  addToCart: (product: Product) => void;
  removeFromCart: (key: string) => void;
}

// Creation du contexte avec une valeur par defaut
const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Provider du panier
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartElment[]>(() => {
    // Charger le panier depuis localStorage s'il existe
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Sauvegarde du panier dans localStorage a chaque modification
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Ajouter un produit au panier
  const addToCart = (product: Product) => {
    let cartElement: CartElment = {
      product: product,
      key: uuidv4()
    }
    setCart((prevCart) => [...prevCart, cartElement]);
  };

  // Supprimer un produit du panier par son titre
  const removeFromCart = (key: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalise pour utiliser le contexte
export const useCart = () => useContext(CartContext);
