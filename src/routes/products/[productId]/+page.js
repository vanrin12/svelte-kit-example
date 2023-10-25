export const load = async (eventLoad) => {
    console.log('Load function called in server');
    const { fetch, params } = eventLoad;
    const { productId } = params;
    const res = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await res.json();
    console.log('products', product);
    return {
        product
    }
}