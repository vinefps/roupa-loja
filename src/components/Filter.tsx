"use client";

import { useState } from "react";
import { FilterEnum } from "../enums/filterEnum";

interface SelectPage {
  handleSelectedPage: (page: number) => void;
  categoryFilter:string;
  setCategory:(prev:FilterEnum) => void;
}

export function Filter({ handleSelectedPage, categoryFilter, setCategory }: SelectPage) {
  // const [useFilter, setFilter] = useState<FilterEnum>(FilterEnum.TODOS);

  return (
    <div className="flex justify-evenly bg-gray-200">
      <div className="flex mr-4 font-medium">
        <div
          onClick={() => setCategory(FilterEnum.TODOS)}
          className={`${categoryFilter === "TODOS" ? "border-b-4" : "border-0 "
            } border-red-400 mr-4`}
        >
          TODOS OS PRODUTOS
        </div>
        <div
          onClick={() => setCategory(FilterEnum.CAMISETAS)}
          className={`${categoryFilter === "CAMISETAS" ? "border-b-4" : "border-0"
            } border-red-400 mr-4`}
        >
          CAMISETAS
        </div>
        <div
          onClick={() => setCategory(FilterEnum.CANECAS)}
          className={`${categoryFilter === "CANECAS" ? "border-b-4" : "border-0"
            } border-red-400 mr-4`}
        >
          CANECAS
        </div>
      </div>
      <div>
        <div>Organizar por</div>
        <div className="flex">
          <div
            onClick={() => handleSelectedPage(1)}
            className="rounded-md bg-gray-100 px-2 mr-2"
          >
            1
          </div>
          <div
            onClick={() => handleSelectedPage(2)}
            className="rounded-md bg-gray-100 px-2 mr-2"
          >
            2
          </div>
          <div
            onClick={() => handleSelectedPage(3)}
            className="rounded-md bg-gray-100 px-2 mr-2"
          >
            3
          </div>
          <div
            onClick={() => handleSelectedPage(4)}
            className="rounded-md bg-gray-100 px-2 mr-2"
          >
            4
          </div>
          <div
            onClick={() => handleSelectedPage(5)}
            className="rounded-md bg-gray-100 px-2 mr-2"
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
}
