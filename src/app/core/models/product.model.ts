export interface IProductsRes {
    message: string,
    data: IProduct[];
}
export interface IProductRes {
    message: string,
    data: IProduct;
}

export interface IProduct {
    _id: string
    name: string,
    description: string,
    imageUrl: string,
    quantity: number,
    price: number,
    slug: string,
    category: string,
    subCategory: string
}
//name, description, imageUrl, quantity, price, slug, category, subCategory