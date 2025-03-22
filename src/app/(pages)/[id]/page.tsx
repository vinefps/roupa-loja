"use client";
import Link from "next/link";
import allProducts from "../../data/itemsData";
import { useState, useEffect } from "react";
import { ItemType } from "@/app/types/product";
import { useParams } from "next/navigation";
import { useCartContext } from "@/contexts/cartContext/CartProvider";
import Image from 'next/image';

export default function ProductDetail() {
  const { setCartItems } = useCartContext();
  const [myItem, setMyItem] = useState<ItemType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { id } = params;
  
  useEffect(() => {
    setIsLoading(true);
    const foundItem = allProducts.find(
      (item: ItemType) => item.id.toString() === id
    );
    setMyItem(foundItem);
    setIsLoading(false);
  }, [id]);
  
  function handleAddCart({ name, id, quantity, image_url, price_in_cents }: ItemType) {
    const objItem = { name, id, quantity, image_url, price_in_cents };
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
  
  if (isLoading) {
    return (
      <div className="container mx-auto p-6 flex flex-col items-start">
        <Link href="/">
          <button className="mb-8 text-gray-600 text-lg flex items-center">
            <span>&larr; Voltar</span>
          </button>
        </Link>
        <div className="animate-pulse w-full">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
            <div className="w-full md:w-1/2">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="h-12 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <Link href="/">
        <button className="mb-8 text-gray-600 text-lg flex items-center hover:text-blue-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
      </Link>
      
      {myItem ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={myItem.image_url || "/path-to-placeholder-image.png"}
                  alt={myItem.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{myItem.name}</h2>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-blue-600">{`R$ ${((myItem.price_in_cents || 0) / 100).toFixed(2).replace('.', ',')}`}</span>
                <span className="ml-3 text-sm text-gray-400 line-through">{`R$ ${(((myItem.price_in_cents || 0) * 1.2) / 100).toFixed(2).replace('.', ',')}`}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Em estoque - Pronta entrega
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
                R$900,00.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">DESCRIÇÃO</h3>
                <p className="text-gray-600">
                  {myItem.description || "Descrição não disponível para este produto."}
                </p>
              </div>
              
              <button 
                onClick={() => handleAddCart({ 
                  name: myItem.name, 
                  id: myItem.id, 
                  quantity: 1, 
                  image_url: myItem.image_url, 
                  price_in_cents: myItem.price_in_cents 
                })} 
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-4 8h18l-4-8M9 7h1M12 7h1" />
                </svg>
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Produto não encontrado</h3>
          <p className="text-gray-500 mb-6">O produto que você está procurando não existe ou foi removido.</p>
          <Link href="/">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              VOLTAR PARA A LOJA
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
