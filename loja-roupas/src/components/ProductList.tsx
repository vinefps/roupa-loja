"use client";
import { useState, useEffect } from "react";
import { ItemType } from "@/app/types/product";
import { useCartContext } from "../contexts/cartContext/CartProvider";
import allProducts from "../app/data/itemsData";
interface SelectPage {
  buttonPage: number;
}

export function ProductList({ buttonPage }: SelectPage) {
  const [products, setProducts] = useState<ItemType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const { cartItems, setCartItems } = useCartContext();
  const itemsPerPage = 12;
  const indexOfLastItem = itemsPerPage * currentPage + 1;
  const indexOfFirstItem =
    currentPage === 1 ? currentPage : indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(buttonPage);
  }, [buttonPage]);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  function handleAddCart({ name, id }: ItemType) {
    const data = {name, id}
        setCartItems(data)
  }

  return (
    <section className="flex justify-center bg-gray-200 my-8">
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {currentItems.map((item: ItemType) => (
          <div className="">
            <div key={item.id}>{item.name}</div>
            <img className="w-[200px]" src={item.image_url} alt="item_image" />
            <div
              onClick={() =>
                handleAddCart({id:item.id, name:item.name})
              }
              className="rounded-md bg-gray-100 px-2 mr-2"
            >
              +
            </div>
            <div className="rounded-md bg-gray-100 px-2 mr-2">-</div>
          </div>
        ))}
      </div>
    </section>
  );
}
