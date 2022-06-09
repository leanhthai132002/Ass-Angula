export type Book = {
    _id: number,
    name: string,
    price: number,
    sale_price: number,
    description: string,
    image_url: string,
    status: number
};

export type BookCreate = {
    name: string,
    price: number,
    sale_price: number,
    description: string,
    image_url: string,
    status: number
    
}