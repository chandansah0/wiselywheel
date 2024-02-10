//for contact
function toggleContactSection() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {


        contactSection.classList.toggle('visible');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        fetch('http://localhost:3000/api/bikefeatures')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data); 

                const searchResultsDiv = document.getElementById('searchResults');
                searchResultsDiv.innerHTML = '';

                const searchTerm = document.getElementById('bikeSearchInput').value.trim().toLowerCase();

                if (searchTerm) {
                    const filteredBikes = data.filter(bike => {
                        // Add a null check for variant_name
                        if (bike.variant_name) {
                            return bike.variant_name.toLowerCase().includes(searchTerm);
                        }
                        return false;
                    });

                    filteredBikes.forEach(bike => {
                        const bikeElement = document.createElement('div');
                        bikeElement.textContent = `Bike: ${bike.variant_name}, Price: ${bike['On-road prize']}`;
                        searchResultsDiv.appendChild(bikeElement);
                    });
                } else {
                    console.log('No search term provided');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

