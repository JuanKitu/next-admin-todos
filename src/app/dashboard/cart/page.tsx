import React from 'react'
import {Metadata} from "next";
import {cookies} from "next/headers";
import {Product, products} from "@/products/data/products";
import {ItemCard} from "@/shopping-cart";
export const metadata: Metadata = {
    title: 'Carrito de compras',
    description: 'Carrito de compras'
}
interface ProductInCart {
    product: Product;
    quantity: number;
}
const getProductInCart = (cart: {[id: string]: number}): ProductInCart[] => {
    const productsInCart: ProductInCart[] = [];
    for(const id of Object.keys(cart)) {
        const product = products.find(product => product.id === id);
        if(product) {
            productsInCart.push({
                product,
                quantity: cart[id]
            })
        }
    }
    return productsInCart;
}
export default async function CartPage() {
    const cookiesStore = await cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}' ) as {[id: string]: number};
    const productsInCart = getProductInCart(cart);
    return (
        <div>
            <h1 className="text-5xl">Productos del carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm: gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        productsInCart.map(({product, quantity}) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
