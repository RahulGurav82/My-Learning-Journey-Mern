document.getElementById('searchForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'search.html'; // Redirect to search.html
};