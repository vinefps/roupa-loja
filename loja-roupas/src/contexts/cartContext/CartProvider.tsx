"use client";
import { ItemType } from "../../app/types/product";
import { createContext, useContext, ReactNode, useState } from "react";


interface CartTypeContext {
  cartItems: ItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

interface ChildrenContextProvider {
  children: ReactNode;
}

const CartContext = createContext<CartTypeContext | undefined>(undefined);

export function useCartContext(){
    const context = useContext(CartContext);

    if (!context) {
      throw new Error("useCartContext must be used within a CartProvider");
    }

    return context;

}

export function CartProvider({ children }: ChildrenContextProvider) {
    const [cartItems, setCartItems] = useState<ItemType[]>([]);
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>{children}</CartContext.Provider>
  )
}
