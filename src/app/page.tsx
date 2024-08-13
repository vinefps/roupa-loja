"use client";
import { Filter } from "@/components/Filter";
import { ProductList } from "../components/ProductList";
import { useState, useEffect } from "react";
import { ItemType } from "./types/product";
import { FilterEnum } from "../enums/filterEnum";
import allProducts from "../app/data/itemsData";

export default function Home() {
  const [buttonPage, setPage] = useState<number>(1);
  const [itemSearch, setItemSearch] = useState<string>("");
  const [products, setProducts] = useState<ItemType[]>([]);
  const [categoryFilter, setCategory] = useState<string>(FilterEnum.TODOS);
  function handleSelectedPage(page: number) {
    setPage(page);
  }

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <main className="bg-gray-200">
        <Filter handleSelectedPage={handleSelectedPage} categoryFilter={categoryFilter} setCategory={setCategory}/>
        <ProductList
          buttonPage={buttonPage}
          products={products}
          itemSearch={itemSearch}
          categoryFilter={categoryFilter}
        />
    </main>
  );
}
