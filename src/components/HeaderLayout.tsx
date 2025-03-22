'use client'
import React from "react";
import Link from "next/link";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput } from "./Primary-Input";
import { useCartContext } from "@/contexts/cartContext/CartProvider";
import { useSearchContext } from '../contexts/searchContext/SearchProvider'
import { useState, useEffect } from "react";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function HeaderLayout() {
  const [totalCartItems, setTotalCart] = useState(0)
  const { setSearchTerm } = useSearchContext();
  const { cartItems } = useCartContext();
  
  useEffect(() => {
    const totalItems = cartItems.reduce((acc, product) => 
      acc + product.quantity
    , 0);
    setTotalCart(totalItems);
  }, [cartItems])
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <div className={`${sairaStencil.className} text-3xl font-bold text-blue-600`}>
            <Link href="/" className="hover:opacity-90 transition-opacity">capputeno</Link>
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-auto">
          <PrimaryInput setSearchTerm={setSearchTerm} />
        </div>
        
        <Link href="/cart" className="ml-6 relative group">
          <div className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200">
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-4 8m4-8l4 8m6-8l4 8m0-16V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 0H6"
              ></path>
            </svg>
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full transition-all duration-300 transform group-hover:scale-110">
                {totalCartItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
