async function populateBikeOptions() {
  try {
    // Fetch the list of bikes from the server
    const response = await fetch("/api/bikefeatures");
    const bikes = await response.json();

    // Get references to the select elements
    const bike1Select = document.getElementById("bike1");
    const bike2Select = document.getElementById("bike2");

    // Populate the select elements with bike options
    bikes.forEach((bike) => {
      const option = document.createElement("option");
      option.text = bike.variant_name;
      option.value = bike._id;
      bike1Select.add(option);
      bike2Select.add(option.cloneNode(true)); // Clone the option for the second select
    });
  } catch (error) {
    console.error("Error fetching bike options:", error);
  }
}

// Function to compare selected bikes
async function compareBikes() {
  const bike1Id = document.getElementById("bike1").value;
  const bike2Id = document.getElementById("bike2").value;

  try {
    // Fetch bike details for comparison
    const response = await fetch("/api/bikefeatures/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bikeIds: [bike1Id, bike2Id] }),
    });
    const bikes = await response.json();

    // Display comparison result
    const comparisonResultElement = document.getElementById("comparisonResult");
    comparisonResultElement.innerHTML = `
          <h2>Comparison Result:</h2>
          <div>
              <h3>${bikes[0].variant_name}</h3>
              <!-- Display bike details here -->
          </div>
          <div>
              <h3>${bikes[1].variant_name}</h3>
              <!-- Display bike details here -->
          </div>
      `;
  } catch (error) {
    console.error("Error comparing bikes:", error);
  }
}

// Call the function to populate bike options when the page loads
populateBikeOptions();
