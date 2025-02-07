"use client"
import { createContext, useContext, useEffect, useState } from "react";

// Definition du type pour un produit
interface Product {
  src: string;
  title: string;
  description: string;
  price: string;
}

// Definition du type du contexte
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (title: string) => void;
}

// Creation du contexte avec une valeur par defaut
const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Provider du panier
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
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
    setCart((prevCart) => [...prevCart, product]);
  };

  // Supprimer un produit du panier par son titre
  const removeFromCart = (title: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalise pour utiliser le contexte
export const useCart = () => useContext(CartContext);
