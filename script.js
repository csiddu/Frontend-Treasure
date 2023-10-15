function searchComponents() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {
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