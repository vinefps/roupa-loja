import { TypeHeader } from "@/app/types/product";
import { Button } from "./Button";

export function PrimaryInput({ setItemSearch }: TypeHeader) {
  return (
    <div>
      <input
        onChange={(e) => {
          if (setItemSearch) {
            setItemSearch(e.target.value);
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
