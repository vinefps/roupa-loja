"use client";
import Link from "next/link";
import allProducts from "../../data/itemsData";
import { useState, useEffect } from "react";
import { ItemType } from "@/app/types/product";
import { useParams } from "next/navigation";
import { useCartContext } from "@/contexts/cartContext/CartProvider";

export default function ProductDetail() {
  const { setCartItems } = useCartContext();
  const [myItem, setMyItem] = useState<ItemType | undefined>(undefined);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const foundItem = allProducts.find(
      (item: ItemType) => item.id.toString() === id
    );
    setMyItem(foundItem);
  }, [id]);

  function handleAddCart({ name, id, quantity, image_url }: ItemType) {
    const objItem = { name, id, quantity, image_url };

    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === objItem.id);

      if (exists) {
        return prev.map((item) => item.id === objItem.id && item.quantity !== undefined ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      } else {
        return [...prev, objItem];
      }
    });
  }

  return (
    <div className="p-5 bg-gray-100 flex flex-col items-start">
      <Link href="/">
        <button className="mb-5 text-gray-600 text-lg flex items-center">
          <span>&larr; Voltar</span>
        </button>
      </Link>
      {myItem ? (
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={myItem.image_url || "/path-to-placeholder-image.png"}
            alt={myItem.name}
            className="w-full md:w-96 h-auto rounded-lg object-cover"
          />
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">{myItem.name}</h2>
            <p className="text-xl font-bold mt-2">{`R$ ${(myItem.price_in_cents || 0) / 100
              }`}</p>
            <p className="text-sm text-gray-500 mt-1">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">DESCRIÇÃO</h3>
              <p className="text-gray-700 mt-2">
                {myItem.description || "Descrição não disponível."}
              </p>
            </div>
            <button onClick={() => handleAddCart({name:myItem.name, id:myItem.id, quantity: 1,image_url:myItem.image_url})} className="mt-10 bg-gray-800 text-white py-3 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-700">
              <img
                src="/path-to-your-icon.png"
                alt="Ícone de carrinho"
                className="w-5 h-5"
              />
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
}
