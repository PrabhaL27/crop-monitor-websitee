async function fetchSensorData() {
  try {
    const response = await fetch('/data');
    const data = await response.json();

    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('soil').textContent = data.soil;
    document.getElementById('rain').textContent = data.rain ? 'Yes' : 'No';

    document.getElementById('crop').textContent = data.cropSuggestion;
    document.getElementById('pest').textContent = data.pestAlert;
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
}

// Refresh data every 5 seconds
setInterval(fetchSensorData, 5000);

// Initial fetch on page load
fetchSensorData();
