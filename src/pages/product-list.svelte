<script>
  export let productList;
</script>

Total items: {productList.length}

<ol>
  {#each productList as product}
    <li>
      <a href={product.node.slug}>
        {product.node.name}
      </a>
    </li>
  {/each}
</ol>
