'use client'
import { TypeHeader } from "@/app/types/product";
import { Button } from "./Button";


export function PrimaryInput({ setSearchTerm }: TypeHeader) {

  return (
    <div>
      <input
        onChange={(e) => {
          if (setSearchTerm) {
            setSearchTerm(e.target.value);
          }
        }}
        className="bg-gray-100 outline-none p-2 rounded-md"
        type="text"
        placeholder="Nome do Produto"
      />
      <Button />
    </div>
  );
}
