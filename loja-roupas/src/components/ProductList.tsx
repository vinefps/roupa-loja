"use client";
import { useState, useEffect } from "react";
import { ItemType } from "@/app/types/product";
import { useCartContext } from "../contexts/cartContext/CartProvider";
import { SelectPage } from '../app/types/product';

export function ProductList({ buttonPage, products, itemSearch }: SelectPage) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { cartItems, setCartItems } = useCartContext();
    const [itemStatus, setStatus] = useState(true);
    const itemsPerPage = 12;
    const indexOfLastItem = itemsPerPage * currentPage + 1;
    const indexOfFirstItem =
        currentPage === 1 ? currentPage : indexOfLastItem - itemsPerPage;

    const filterItems = products.filter((item) => item.name.toLocaleLowerCase().includes(itemSearch.toLocaleLowerCase()));
    const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(buttonPage);
    }, [buttonPage]);

    if (!products.length) {
        return <div>Loading...</div>;
    }

    function handleAddCart({ name, id }: ItemType) {
        const quantity = 1;
        const objItem = { name, id, quantity }

        setCartItems((prev) => {
            const exists = prev.some(item => item.id === objItem.id);

            if (exists) {
                return prev.map(item =>
                    item.id === objItem.id && item.quantity !== undefined ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, objItem]
            }
        });
    }
    function handleRemoveCart(id: number) {
        setStatus((prev) => {           //Sempre que altero o estado de uma State, o componente é renderizado novamente.
            return !prev                //Quero que aconteça, para o número da quantidade de itens, atualize caso eu + ou -;
        });

        setCartItems((prev) => {
            return prev
                .map((item) => {
                    if (item.id === id && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }

                    return item;
                }).filter((item) => {
                    if(item.id === id && item.quantity === 0){
                        return item.id !== id
                    }
                })
                
        });

    }

    return (
        <section className="flex justify-center bg-gray-200 my-8 h-full">
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
                {currentItems.map((item: ItemType) => (
                    <div key={item.id} className="w-[200px]">
                        <img className="rounded-md" src={item.image_url} alt="item_image" />
                        <div
                            className="rounded-md bg-gray-100 px-2 mr-2"
                        >
                            {item.name}
                        </div>
                        <div
                            className="rounded-md bg-gray-100 px-2 mr-2 font-bold"
                        >
                            {`R$ ${item.price_in_cents !== undefined ? item.price_in_cents / 100 : undefined}`}
                        </div>
                        <div className="flex w-full">
                            <div onClick={() =>
                                handleAddCart({ id: item.id, name: item.name })
                            } className="rounded-md bg-gray-100 px-2 mr-2">+</div>
                            <div onClick={() =>
                                handleRemoveCart(item.id)
                            } className="rounded-md bg-gray-100 px-2 mr-2">-</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
