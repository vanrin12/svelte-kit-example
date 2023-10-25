<script>
    export let data;
    $:user = data?.name.first + " " + data?.name.last
</script>
<h1>Sveltekit check ISL</h1>
{#if user}
<h1>hello {user}</h1>
{:else}
<h1>Error</h1>
{/if}
