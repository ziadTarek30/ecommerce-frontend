export interface ICartItem {
    imageUrl: string,
    name: string,
    price: number,
    slug: string,
    amount: number,
    quantity: number
}

export interface ICartInfo {
    priceChanged: boolean,
    cartItems: ICartItem[]
}