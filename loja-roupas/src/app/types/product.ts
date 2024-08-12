import { ReactNode } from 'react';

export interface ItemType {
    id: number;
    name: string;
    image_url?: string;
    price_in_cents?: number;
    description?:string
    quantity: number;
    size?: string;

}

export interface MainPageTypes {
    buttonPage: number;
    products: ItemType[];
    itemSearch:string;
}


export interface TypeHeader {
    setSearchTerm?: (prev: string) => void;
}
