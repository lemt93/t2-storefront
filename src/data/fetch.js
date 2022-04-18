let allProducts = null;


export async function getAllProducts() {
  if (allProducts) {
    return allProducts;
  }

  const response = await fetch('https://api.t2delivery.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.API_KEY}`
    },
    body: JSON.stringify({
      query: `
      {
        products(first: 50, channel: "default-channel") {
          edges {
            node {
              id
              slug
              name
              description
              media {
                  url
              }
            }
          }
        }
      }
    `
    }),
  });
  const json = await response.json();

  return allProducts = json.data.products;
}
