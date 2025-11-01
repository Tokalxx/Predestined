// Fetch the members JSON
fetch("/src/data/members.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".members_container");

    data.forEach((member) => {
      // Create the card div
      const card = document.createElement("div");
      card.classList.add("member_card");

      // Add image
      const img = document.createElement("img");
      img.src = member.image;
      img.alt = member.name;
      card.appendChild(img);

      // Add name
      const name = document.createElement("h3");
      name.classList.add("member_name");
      name.textContent = member.name;
      card.appendChild(name);

      // Add bio
      const bio = document.createElement("p");
      bio.classList.add("member_bio");
      bio.textContent = member.bio;
      card.appendChild(bio);

      // Append the card to container
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error loading members.json:", err));
