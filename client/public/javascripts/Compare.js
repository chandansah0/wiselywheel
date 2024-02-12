
async function populateBikeOptions(budget) {
  try {
    const response = await fetch(`http://localhost:3000/api/bikefeatures?budget=${budget}`);
    const bikes = await response.json();

    if (bikes.length === 0) {
      document.getElementById("comparisonResult").innerHTML = "No bikes found within the selected budget range.";
      document.getElementById("bikeSelection").style.display = "none";
      return;
    }

    const bike1Select = document.getElementById("bike1");
    const bike2Select = document.getElementById("bike2");

    bikes.forEach((bike) => {
      const option = document.createElement("option");
      option.text = bike.variant_name;
      option.value = bike._id;
      bike1Select.add(option);
      bike2Select.add(option.cloneNode(true));
    });
    document.getElementById("bikeSelection").style.display = "block";
  } catch (error) {
    console.error("Error fetching bike options:", error);
  }
}

async function compareBikes() {
  const bike1Id = document.getElementById("bike1").value;
  const bike2Id = document.getElementById("bike2").value;

  try {
    const response = await fetch("http://localhost:3000/api/bikefeatures/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bikeIds: [bike1Id, bike2Id] }),
    });
    const bikes = await response.json();

    const comparisonResultElement = document.getElementById("comparisonResult");
    comparisonResultElement.innerHTML = generateComparisonTable(bikes);
  } catch (error) {
    console.error("Error comparing bikes:", error);
  }
}

function generateComparisonTable(bikes) {
  let overallWinner = null;
  let tableHtml = `
    <h2>Comparison Result:</h2>
    <div class="pros-cons">
      <h3>Pros & Cons</h3>
      <p>${bikes[0].variant_name} Pros: ${bikes[0].pros}</p>
      <p>${bikes[0].variant_name} Cons: ${bikes[0].cons}</p>
      <p>${bikes[1].variant_name} Pros: ${bikes[1].pros}</p>
      <p>${bikes[1].variant_name} Cons: ${bikes[1].cons}</p>
    </div>
    <table>
      <tr>
        <th>Feature</th>
        <th>${bikes[0].variant_name}</th>
        <th>${bikes[1].variant_name}</th>
        <th>Winner</th>
      </tr>
  `;

  for (const key in bikes[0]) {
    if (
      key !== "_id" &&
      key !== "__v" &&
      key !== "image_url" &&
      key !== "variant_name" &&
      key !== "pros" &&
      key !== "cons"
    ) {
      const winner = getWinner(bikes, bikes[0][key], bikes[1][key]);
      tableHtml += `
        <tr>
          <td>${key}</td>
          <td>${bikes[0][key]}</td>
          <td>${bikes[1][key]}</td>
          <td class="${winner}">${winner}</td>
        </tr>
      `;
      if (overallWinner === null || winner === "Tie") {
        overallWinner = winner;
      }
    }
  }

  tableHtml += `</table>`;
  tableHtml += `<p>Overall Winner: ${overallWinner}</p>`;

  tableHtml += `<div class="pros-cons">
    <h3>Overall Pros & Cons</h3>
    <p>${bikes[0].variant_name} Pros: ${bikes[0].pros}</p>
    <p>${bikes[0].variant_name} Cons: ${bikes[0].cons}</p>
    <p>${bikes[1].variant_name} Pros: ${bikes[1].pros}</p>
    <p>${bikes[1].variant_name} Cons: ${bikes[1].cons}</p>
  </div>`;

  return tableHtml;
}

function getWinner(bikes, value1, value2) {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 > value2 ? bikes[0].variant_name : value1 < value2 ? bikes[1].variant_name : "Tie";
  } else {
    return value1 > value2 ? bikes[0].variant_name : value1 < value2 ? bikes[1].variant_name : "Tie";
  }
}

const budgetSelect = document.getElementById("budget");
budgetSelect.addEventListener("change", function () {
  const selectedBudget = this.value;
  populateBikeOptions(selectedBudget);
});

document.getElementById("compareButton").addEventListener("click", compareBikes);
