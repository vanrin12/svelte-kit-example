<script>
    export let data;
    const { product } = data;
    function handleClick() {
		alert('Clicked')
	}
</script>
<h1>Product Detail Page</h1>
<h2>{product.title} - {product.price}</h2>
<p>{product.description}</p>
<button on:click={handleClick}>Click here</button>
