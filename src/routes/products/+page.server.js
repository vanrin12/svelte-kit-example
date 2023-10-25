// export const prerender = true;

export const load = async (serverLoadEvent) => {
    console.log('Load function called in server');
    const { fetch } = serverLoadEvent;
    const res = await fetch('http://localhost:4000/products');
    const products = await res.json();
    console.log('products', products);
    return {
        products
    }
}

export const config = {
    isr: {
        // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
        // Setting the value to `false` means it will never expire.
        expiration: 10
    },
};