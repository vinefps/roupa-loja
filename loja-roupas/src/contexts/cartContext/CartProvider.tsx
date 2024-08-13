"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { ItemType } from "../../app/types/product";

interface CartTypeContext {
  cartItems: ItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}


interface ChildrenContextProvider {
  children: ReactNode;
}


export const CartContext = createContext<CartTypeContext | undefined>(
  undefined
);

export function useCartContext(): CartTypeContext {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Nao foi possivel criar o context");
  }
  return context;
}


export function CartProvider({ children }: ChildrenContextProvider) {
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
