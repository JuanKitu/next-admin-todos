import {getCookie, hasCookie, setCookie} from "cookies-next";

export const getCookieCart = async (): Promise<{[id: string]: number}> => {
    const existeCookie = await hasCookie('cart');
    if(!existeCookie){
        return {}
    }
    const cart = await getCookie('cart');
    return JSON.parse(cart as string ?? '{}');
};

export const addProductToCart = async (id: string) => {
    const cart = await getCookieCart();
    cart[id] = (cart[id] ?? 0) + 1;
    await setCookie('cart', JSON.stringify(cart), {});
};

export const removeProductFromCart = async (id: string) => {
    const cart = await getCookieCart();
    delete cart[id];
    await setCookie('cart', JSON.stringify(cart), {});
}

export const removeSingleItemFromCart = async (id: string) => {
    const cart = await getCookieCart();
    if(cart[id] === 1){
        return removeProductFromCart(id);
    }
    cart[id] = (cart[id] ?? 0) - 1;
    await setCookie('cart', JSON.stringify(cart), {});
}