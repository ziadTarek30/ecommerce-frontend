import { ICartInfo, ICartItem } from "./cart.model";

export interface IOrder {
    cartItems: ICartItem[],
    status: string,
    totalPrice: number,
    shipToAddress: string,
    phone: string,
    user: string,
    orderedAt: string
}