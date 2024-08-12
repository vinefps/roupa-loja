"use client";
import { Filter } from "@/components/Filter";
import { ProductList } from "../components/ProductList";
import { CartProvider } from "../contexts/cartContext/CartProvider";
import { useState, useEffect } from "react";
import HeaderLayout from "../components/HeaderLayout";
import { ItemType } from "./types/product";

import allProducts from "../app/data/itemsData";

export default function Home() {
  const [buttonPage, setPage] = useState<number>(1);
  const [itemSearch, setItemSearch] = useState<string>("");
  const [products, setProducts] = useState<ItemType[]>([]);
  function handleSelectedPage(page: number) {
    setPage(page);
  }

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <main className="bg-gray-200">
        <Filter handleSelectedPage={handleSelectedPage} />
        <ProductList
          buttonPage={buttonPage}
          products={products}
          itemSearch={itemSearch}
        />
    </main>
  );
}
