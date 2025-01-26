document.addEventListener('DOMContentLoaded', function () {
    // Define the async function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
        const dataContainer = document.getElementById('api-data'); // Select the data container

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            // Convert the response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through the users and create <li> elements
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Display the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the fetchUserData function when the DOM is fully loaded
    fetchUserData();
});