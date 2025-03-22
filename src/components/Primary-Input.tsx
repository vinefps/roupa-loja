'use client'
import { TypeHeader } from "@/app/types/product";
import { Button } from "./Button";

export function PrimaryInput({ setSearchTerm }: TypeHeader) {
  return (
    <div className="relative flex w-full">
      <input
        onChange={(e) => {
          if (setSearchTerm) {
            setSearchTerm(e.target.value);
          }
        }}
        className="w-full bg-gray-100 border border-gray-200 outline-none py-2 px-4 rounded-l-md focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 placeholder-gray-400"
        type="text"
        placeholder="Buscar produtos..."
      />
      <Button />
    </div>
  );
}
