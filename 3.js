async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  }
  
  const locationsUrl = "https://api.megaport.com/v2/locations";
  
  fetchData(locationsUrl)
    .then(response => {
      if (response?.data && response.data.length) {
        console.log("Locations:", response.data);
      } else {
        console.log("No locations to show.");
      }
    })
    .catch(error => {
      console.error("Error fetching locations:", error);
    });