document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded

    // Get the search button element
    const searchButton = document.querySelector('.search-bar button');

    // Add a click event listener to the search button
    searchButton.addEventListener('click', function() {
        // Get the input value
        const budgetInput = document.querySelector('.search-bar input');
        const budget = budgetInput.value;

        // Perform some action with the entered budget (for example, display an alert)
        alert(`Searching for bikes within budget: ${budget}`);
    });
});

