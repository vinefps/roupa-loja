'use client'
import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import { useState } from "react";

export default function Home() {
  const [buttonPage, setPage] = useState<number>(1);
  function handleSelectedPage(page:number){
    setPage(page)
  }

  return (
    <main className="bg-gray-200">
      <Filter handleSelectedPage={handleSelectedPage}/>
      <ProductList buttonPage={buttonPage}/>
    </main>
  );
}
