//for contact
function toggleContactSection() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.classList.toggle('visible');
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

            console.log('Fetched bike features:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});



