document.addEventListener('DOMContentLoaded', function () {
    const featureList = document.getElementById('featureList');

    // Dummy data for demonstration (replace with actual data)
    const featureRequests = [
        {
            name: 'Feature 1',
            description: 'Description for Feature 1',
            status: 'Pending',
            date: '2023-10-12 14:30:00',
        },
        {
            name: 'Feature 2',
            description: 'Description for Feature 2',
            status: 'In Progress',
            date: '2023-10-13 09:45:00',
        },
        // Add more feature requests as needed
    ];

    // Display feature requests in the list
    featureRequests.forEach((request) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${request.name}</strong><br>
            Description: ${request.description}<br>
            Status: ${request.status}<br>
            Date: ${request.date}<br><br>
        `;
        featureList.appendChild(listItem);
    });
});
