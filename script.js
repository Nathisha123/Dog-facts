const url = "https://dog-api.kinduff.com/api/facts?number=5";


//fetch dog details
function fetchDogFacts(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("Failed to retrieve dog facts");
      }
      return response.json();
    })
    .then(data => data.facts)
    .catch(error => console.error("Error fetching dog facts:", error));
}


//display dog facts
function displayFacts(dogFacts) {
  const container = document.querySelector(".container");

  dogFacts.forEach(dogFact => {
    const factCard = document.createElement("div");
    factCard.setAttribute("class","card");

    factCard.innerHTML = `
      <div class="card-header"><h5> New Facts </h5> </div>
      <div class="card-body">
        <h5>${dogFact}</h5>

      </div>
    `;

    container.appendChild(factCard);
  });

  document.body.appendChild(container);
}

//function call
fetchDogFacts(url)
  .then(data => {
    displayFacts(data);
  });