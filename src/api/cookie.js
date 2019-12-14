import * as Cookies from "js-cookie";

export const setStoreIDCookie = (store_id) => { // Store ID
    Cookies.remove("store_id");
    Cookies.set("store_id", store_id, { expires: 14 });
};

export const getStoreIDCookie = () => {
    const cookie = Cookies.get("store_id");

    if (cookie === undefined || !cookie) {
        return null;
    } else {
        return cookie;
    }
};

export const setCartCookie = (cart) => { // Cart ID
    localStorage.removeItem("cart");
    localStorage.setItem("cart", cart);
};

export const getCartCookie = () => {
    const cookie = localStorage.getItem("cart");

    if (cookie === undefined) {
        return null;
    } else {
        return cookie;
    }
};
