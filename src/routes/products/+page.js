import Product from './product.svelte'
export const load = async (loadEvent) => {
    console.log('Load function called in page');
    const { fetch, depends } = loadEvent;
    depends('products:latest')
    const res = await fetch('http://localhost:4000/products');
    const products = res.json();
    return {
        products
        // Component: Product
    }
}

export const ssr = true;
export const csr = true;
export const prerender = true;