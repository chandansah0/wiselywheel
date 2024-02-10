function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');

    if (username === 'admin' && password === 'adminpass') {
        loginResult.innerHTML = '<span class="success-message">Login successful</span>';
        window.location.href = 'admin-dashboard.html';
        return false;
    } else {
        loginResult.innerHTML = '<span class="error-message">Invalid username or password</span>';
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/bikefeatures')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // document.getElementById('fetchedData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    const searchButton = document.getElementById('searchButton');
    const bikeSearchInput = document.getElementById('bikeSearchInput');

    if (searchButton && bikeSearchInput) {
        searchButton.addEventListener('click', function () {
            const searchInput = bikeSearchInput.value;
            console.log('Search input:', searchInput);
        });
    } else {
        console.error('Search button or search input not found.');
    }
});
