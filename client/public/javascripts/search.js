
document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:3000/api/bikefeatures')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const searchResultsDiv = document.getElementById('searchResults');
      // Clear previous search results
      searchResultsDiv.innerHTML = '';

      // Display search results
      data.forEach(bike => {
        const bikeElement = document.createElement('div');
        bikeElement.textContent = `Bike: ${bike.name}, Price: ${bike.price}`;
        searchResultsDiv.appendChild(bikeElement);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
