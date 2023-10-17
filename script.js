document.addEventListener("DOMContentLoaded", () => {
  const parentDiv = document.getElementById("component-items");

  fetch("./components.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((component) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = ` <div class="card">
                <div class="poster"><a href="components/${component.url}"><img
                            src="${component.imgUrl}" alt="${component.name}" /></a></div>
                <div class="details">
                    <h1>${component.name}</h1>
                    <h2>By: ${component.authorName}</h2>
                </div>
            </div>`;
        parentDiv.appendChild(newElement);
      });
    });
});

function searchComponents() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector(".details h1").textContent.toLowerCase();
    const author = card.querySelector(".details h2").textContent.toLowerCase();
    console.log(title, author);

    if (title.includes(searchInput) || author.includes(searchInput)) {
      card.style.display = "block";
      foundResults = true;
    } else {
      card.style.display = "none";
    }
  });
}
