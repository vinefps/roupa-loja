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
  }
  );
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  function handleAddCart({ name, id, quantity, price_in_cents, image_url }: ItemType) {
    const objItem = { name, id, quantity, price_in_cents, image_url };

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

  // function handleRemoveCart(id: number) {
  //   setCartItems((prev) => {
  //     return prev.map((item) => {
  //       if (item.id === id && item.quantity > 1) {
  //         return { ...item, quantity: item.quantity - 1 };
  //       } else {
  //         return item;
  //       }
  //     });
  //   });
  // }

  return (
    <section className="flex justify-center bg-gray-200 my-8 h-full relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {currentItems.map((item: ItemType) => (
          <div key={item.id} className="w-[200px] ">
            <Link href={`/${item.id}`}>
              <Image
                className="rounded-md"
                src={item.image_url}
                alt="item_image"
                width={300}
                height={200}
              />
              <div className="rounded-md bg-gray-100 px-2 mr-2 h-[50px]">
                {item.name}
              </div>
              <div className="rounded-md bg-gray-100 px-2 mr-2 font-bold">
                {`R$ ${item.price_in_cents !== undefined
                  ? item.price_in_cents / 100
                  : undefined
                  }`}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

