"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { ItemType } from "../../app/types/product";

// Definindo a interface do tipo do contexto
interface CartTypeContext {
  cartItems: ItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

// Interface para o provider aceitar filhos como props
interface ChildrenContextProvider {
  children: ReactNode;
}

// Criando o contexto com o tipo definido e iniciando como indefinido
export const CartContext = createContext<CartTypeContext | undefined>(
  undefined
);

// Hook para usar o contexto do carrinho com tipagem adequada
export function useCartContext(): CartTypeContext {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Nao foi possivel criar o context");
  }
  return context;
}

// Provider para o contexto do carrinho
export function CartProvider({ children }: ChildrenContextProvider) {
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
