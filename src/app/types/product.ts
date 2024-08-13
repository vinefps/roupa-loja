

export interface ItemType {
    id: number;
    name: string;
    image_url: string;
    price_in_cents: number;
    description?:string
    quantity: number;
    category?:string;
    size?: string;

}

export interface MainPageTypes {
    buttonPage: number;
    products: ItemType[];
    itemSearch:string;
    categoryFilter:string
}


export interface TypeHeader {
    setSearchTerm?: (prev: string) => void;
}
