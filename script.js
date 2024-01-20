document.addEventListener('DOMContentLoaded', function() {
    // Sample data for featured products
    const featuredProducts = [
        { name: 'Product 1', price: '$19.99' },
        { name: 'Product 2', price: '$29.99' },
        { name: 'Product 3', price: '$39.99' }
    ];

    // Function to display featured products
    function displayFeaturedProducts() {
        const featuredProductsList = document.getElementById('featuredProductsList');

        // Clear any existing content
        featuredProductsList.innerHTML = '';

        // Loop through featured products and create list items
        featuredProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - ${product.price}`;
            featuredProductsList.appendChild(listItem);
        });
    }

    // Initial display of featured products
    displayFeaturedProducts();
});
