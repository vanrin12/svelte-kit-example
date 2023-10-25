
<script>
    import Product from './product.svelte'
    import { invalidate } from '$app/navigation';
    export let data;
    function refresh() {
        invalidate('products:latest')
    }
</script>
<h1>List Products</h1>
{
    #each data.products as product }
       <div>
        <Product {product}/>
       </div> 
    {/each
}

<button on:click={refresh}>Refresh</button>
