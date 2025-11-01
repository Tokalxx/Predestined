fetch("/src/data/events.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".events_container");

    data.forEach((event) => {
      // Create a parent div for this gathering
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("gathering_card"); // optional class

      // Name
      const nameDiv = document.createElement("div");
      const nameLabel = document.createElement("p");
      nameLabel.textContent = "Name:";
      const nameValue = document.createElement("p");
      nameValue.textContent = event.name;
      nameDiv.appendChild(nameLabel);
      nameDiv.appendChild(nameValue);

      // Place
      const placeDiv = document.createElement("div");
      const placeLabel = document.createElement("p");
      placeLabel.textContent = "Place:";
      const placeValue = document.createElement("p");
      placeValue.textContent = event.place;
      placeDiv.appendChild(placeLabel);
      placeDiv.appendChild(placeValue);

      // Date
      const dateDiv = document.createElement("div");
      const dateLabel = document.createElement("p");
      dateLabel.textContent = "Date:";
      const dateValue = document.createElement("p");
      dateValue.textContent = event.date;
      dateDiv.appendChild(dateLabel);
      dateDiv.appendChild(dateValue);

      // Append all three divs to parent
      parentDiv.appendChild(nameDiv);
      parentDiv.appendChild(placeDiv);
      parentDiv.appendChild(dateDiv);

      // Append parent div to container
      container.appendChild(parentDiv);
    });
  })
  .catch((err) => console.error("Error loading events.json:", err));
