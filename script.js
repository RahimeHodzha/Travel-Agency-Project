document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Menu Toggle
    const menuToggle = document.querySelector('.bi-three-dots');
    const navLinks = document.querySelector('header nav ul');

    // Initially hide the navigation links on smaller screens
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // 2. Explore Now Button Functionality
    const exploreButton = document.querySelector('.search_bx input[type="button"]');
    exploreButton.addEventListener('click', () => {
        const destination = document.querySelector('.search_bx .card input[type="text"]').value.trim();
        const date = document.querySelector('.search_bx .card input[type="date"]').value;
        const people = document.querySelector('.search_bx .card input[type="number"]').value;

        // Simple validation
        if (!destination || !date || !people) {
            alert('Please fill in all search fields.');
            return;
        }

        // You can replace this alert with actual search functionality
        alert(`Searching for trips to ${destination} on ${date} for ${people} people.`);
    });

    // 3. Subscription Form Handling
    const subscribeForm = document.querySelector('.join_form');
    const subscribeInput = document.querySelector('.join_form input[type="text"]');

    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting

        const email = subscribeInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // You can replace this alert with actual subscription functionality
        alert(`Thank you for subscribing with ${email}!`);

        // Clear the input field after successful subscription
        subscribeInput.value = '';
    });

    // Email validation function using regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Optional: Close the navigation menu when clicking outside (for better UX)
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});
