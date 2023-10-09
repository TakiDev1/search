// Function to fetch random user data from the API
async function fetchRandomUserData() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=7');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
    }
}

// Function to extract user information from the fetched data
function extractUserData(data) {
    const visitors = data.map(user => user.dob.age);
    const countries = data.map(user => user.location.country);
    const timeSpent = visitors.map(age => age * 2); // Just for demonstration

    return { visitors, countries, timeSpent };
}

// Function to create and display charts
async function displayCharts() {
    const userData = await fetchRandomUserData();
    const { visitors, countries, timeSpent } = extractUserData(userData);

    // Visitors chart
    const visitorsChartCtx = document.getElementById('visitorsChart').getContext('2d');
    new Chart(visitorsChartCtx, {
        type: 'line',
        data: {
            labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7'],
            datasets: [{
                label: 'Age',
                data: visitors,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Countries chart
    const countriesChartCtx = document.getElementById('countriesChart').getContext('2d');
    const countryCounts = countries.reduce((countMap, country) => {
        countMap[country] = (countMap[country] || 0) + 1;
        return countMap;
    }, {});
    const countryLabels = Object.keys(countryCounts);
    const countryData = Object.values(countryCounts);
    new Chart(countriesChartCtx, {
        type: 'bar',
        data: {
            labels: countryLabels,
            datasets: [{
                label: 'Count',
                data: countryData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Time spent chart
    const timeSpentChartCtx = document.getElementById('timeSpentChart').getContext('2d');
    new Chart(timeSpentChartCtx, {
        type: 'bar',
        data: {
            labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7'],
            datasets: [{
                label: 'Time Spent (minutes)',
                data: timeSpent,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to display charts when the page loads
window.addEventListener('load', displayCharts);
