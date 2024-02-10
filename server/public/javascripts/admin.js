document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display data
    fetch('/api/bikefeatures')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('fetchedData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Handle form submission for filtering
    document.getElementById('filterForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const filterField = document.getElementById('filterField').value;
        const filterValue = document.getElementById('filterValue').value;

        fetch(`/api/bikefeatures?${filterField}=${filterValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(filteredData => {
                document.getElementById('filterResults').textContent = JSON.stringify(filteredData, null, 2);
            })
            .catch(error => {
                console.error('Error filtering data:', error);
            });
    });
});
