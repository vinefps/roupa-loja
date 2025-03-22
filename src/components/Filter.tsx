"use client";
import { useState } from "react";
import { FilterEnum } from "../enums/filterEnum";

interface SelectPage {
  handleSelectedPage: (page: number) => void;
  categoryFilter: string;
  setCategory: (prev: FilterEnum) => void;
}

export function Filter({ handleSelectedPage, categoryFilter, setCategory }: SelectPage) {
  return (
    <div className="flex justify-between items-center py-6 px-4 bg-white shadow-sm rounded-lg mb-6">
      <div className="flex font-medium">
        <button
          onClick={() => setCategory(FilterEnum.TODOS)}
          className={`${
            categoryFilter === "TODOS"
              ? "border-b-2 text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          } border-blue-600 mr-8 pb-1 transition-all duration-200`}
        >
          TODOS OS PRODUTOS
        </button>
        <button
          onClick={() => setCategory(FilterEnum.CAMISETAS)}
          className={`${
            categoryFilter === "CAMISETAS"
              ? "border-b-2 text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          } border-blue-600 mr-8 pb-1 transition-all duration-200`}
        >
          CAMISETAS
        </button>
        <button
          onClick={() => setCategory(FilterEnum.CANECAS)}
          className={`${
            categoryFilter === "CANECAS"
              ? "border-b-2 text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          } border-blue-600 mr-8 pb-1 transition-all duration-200`}
        >
          CANECAS
        </button>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm text-gray-600 mb-2 font-medium">Página</div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => handleSelectedPage(page)}
              className="w-8 h-8 rounded-md flex items-center justify-center mx-1 text-sm font-medium transition-all duration-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{
                backgroundColor: page === 1 ? "#EBF5FF" : "#F9FAFB",
                color: page === 1 ? "#2563EB" : "#4B5563",
                border: page === 1 ? "1px solid #BFDBFE" : "1px solid #E5E7EB",
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
