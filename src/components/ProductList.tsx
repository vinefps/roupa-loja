"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useCartContext } from "@/contexts/cartContext/CartProvider";
import { ItemType, MainPageTypes } from "@/app/types/product";
import { useSearchContext } from '../contexts/searchContext/SearchProvider'

export function ProductList({ products, buttonPage, categoryFilter }: MainPageTypes) {
  const { searchTerm } = useSearchContext();
  const { cartItems, setCartItems } = useCartContext();
  
  const itemsPerPage = 12;
  const indexOfLastItem = itemsPerPage * buttonPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const filteredItems = products.filter((item) => {
    if (categoryFilter === 'TODOS') {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    } else if (categoryFilter === 'CAMISETAS') {
      return item.category === 't-shirts'
    } else if (categoryFilter === 'CANECAS') {
      return item.category === 'mugs'
    } else {
      return item;
    }
  });
  
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
  if (!products.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-t-blue-600 border-r-gray-200 border-b-gray-200 border-l-gray-200 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium">Carregando produtos...</p>
        </div>
      </div>
    );
  }
  
  function handleAddCart({ name, id, quantity, price_in_cents, image_url }: ItemType) {
    const objItem = { name, id, quantity, price_in_cents, image_url };
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === objItem.id);
      if (exists) {
        return prev.map((item) => item.id === objItem.id && item.quantity !== undefined 
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      } else {
        return [...prev, objItem];
      }
    });
  }
  
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item: ItemType) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/${item.id}`} className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  src={item.image_url}
                  alt={item.name}
                  width={300}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-700 font-medium mb-2 line-clamp-2 h-12">
                  {item.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg">
                  {`R$ ${item.price_in_cents !== undefined
                    ? (item.price_in_cents / 100).toFixed(2).replace('.', ',')
                    : '0,00'
                  }`}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">Nenhum produto encontrado</h3>
          <p className="text-gray-500 mt-1">Tente um termo de busca diferente ou outra categoria.</p>
        </div>
      )}
    </section>
  );
}
