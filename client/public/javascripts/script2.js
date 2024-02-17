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
                const searchResultsDiv = document.getElementById('searchResults');
                searchResultsDiv.innerHTML = '';

                const searchTerm = document.getElementById('bikeSearchInput').value.trim().toLowerCase();

                if (searchTerm) {
                    const filteredBikes = data.filter(bike => {
                        // Filter bikes by brand name
                        if (bike.brand) {
                            return bike.brand.toLowerCase().includes(searchTerm);
                        }
                        return false;
                    });

                    filteredBikes.forEach(bike => {
                        // Create a link for each bike to view details on a new page
                        const bikeLink = document.createElement('a');
                        bikeLink.href = `/bikeDetails?id=${bike._id}`;
                        bikeLink.textContent = `${bike.variant_name} - ${bike.brand}`;
                        bikeLink.classList.add('bike-link');
                        searchResultsDiv.appendChild(bikeLink);
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
