// Function to get the IP address
async function getIPAddress() {
    try {
        // Fetch the IP address using a third-party API
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        // Display the IP address in the HTML
        document.getElementById('ip-address').textContent = data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        document.getElementById('ip-address').textContent = 'Unable to fetch IP address.';
    }
}

// Call the function when the page loads
getIPAddress();
