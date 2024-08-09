export interface ItemType {
    id: number;
    name: string;
    image_url?: string;
    price_in_cents?: number;
    quantity?: number;
    size?: string;

}

export interface SelectPage {
    buttonPage: number;
    products: ItemType[];
    itemSearch: string;
}


export interface TypeItemSearch {
    setItemSearch: (prev:string) => void;
}