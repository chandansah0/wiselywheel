function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');

    // Simulate server-side authentication (replace this with actual server-side logic)
    if (username === 'admin' && password === 'adminpass') {
        loginResult.innerHTML = '<span class="success-message">Login successful</span>';
        // Redirect to the admin page or perform other actions as needed
        window.location.href = 'admin-dashboard.html';
        return false; // Returning false to prevent the form from submitting (no actual submission in this example)
    } else {
        loginResult.innerHTML = '<span class="error-message">Invalid username or password</span>';
        return false;
    }
}
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

