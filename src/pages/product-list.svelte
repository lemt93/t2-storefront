<script>
  export let productList;
</script>

Total items: {productList.length}

<ol>
  {#each productList as product}
    <li>{product.node.name}</li>
  {/each}
</ol>
