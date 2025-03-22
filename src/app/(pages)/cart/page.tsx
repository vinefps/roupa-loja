"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useCartContext } from "@/contexts/cartContext/CartProvider";
import { ItemType } from "@/app/types/product";
import Image from 'next/image';

interface ChangeQuantity {
  product: ItemType;
  number: number;
}

export default function CartPage() {
  const [subTotal, setSubTotal] = useState(0);
  const [totalCartItems, setTotalCart] = useState(0);
  const [stateTotal, setTotal] = useState(0);
  const { cartItems, setCartItems } = useCartContext();
  const [isLoading, setIsLoading] = useState(true);

  // Carrega os itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    setIsLoading(true);
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
    setIsLoading(false);
  }, [setCartItems]);

  // Salva os itens do carrinho no localStorage sempre que eles mudarem
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const subTotalValue = cartItems.reduce(
        (acc, product) => acc + (product.price_in_cents * product.quantity) / 100,
        0
      );
      const deliveryFee = 40;
      setSubTotal(subTotalValue);
      setTotal(subTotalValue + deliveryFee);
    } else {
      setSubTotal(0);
      setTotal(0);
    }
  }, [cartItems]);

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, product) => acc + product.quantity, 0);
    setTotalCart(totalItems);
  }, [cartItems]);

  function removeQuantity({ product, number }: ChangeQuantity) {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === product.id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function addQuantity({ product, number }: ChangeQuantity) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function handleRemoveFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 p-5 flex flex-col">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-24 mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para loja
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-3">SEU CARRINHO</h1>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-6">
                <p className="text-lg text-gray-600">
                  Total ({cartItems.length} {cartItems.length === 1 ? 'produto' : 'produtos'})
                </p>
                <p className="text-xl font-bold text-blue-600">
                  R$ {subTotal.toFixed(2).replace('.', ',')}
                </p>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Seu carrinho está vazio</h3>
                  <p className="text-gray-500 mb-6">Parece que você ainda não adicionou nenhum produto ao carrinho</p>
                  <Link href="/">
                    <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      CONTINUAR COMPRANDO
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  {cartItems.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border border-gray-100 p-4 mb-4 flex items-center hover:shadow-sm transition-shadow duration-200"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                      </div>
                      <div className="ml-6 flex-1">
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h2>
                        <p className="text-gray-500 text-sm mb-3 line-clamp-1">{product.description}</p>
                        <div className="flex items-center">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => removeQuantity({ product, number: product.quantity - 1 })}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                              aria-label="Diminuir quantidade"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="w-10 text-center py-1 font-medium text-gray-700 border-x border-gray-200">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => addQuantity({ product, number: product
