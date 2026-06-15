const renderArtist = async () => {
  const idString = window.location.href.split("/").pop();

  if (!/^\d+$/.test(idString)) {
    window.location.href = "/404";
    return;
  }

  const response = await fetch(`/artists/api/${idString}`);

  if (!response.ok) {
    window.location.href = "/404";
    return;
  }

  const artist = await response.json();

  const backButton = document.createElement("a");
  backButton.textContent = "← All Artists";
  backButton.href = "/all-artists";
  backButton.className = "back-button";
  document.getElementById("back-container").appendChild(backButton);

  document.getElementById("image").src = artist.image;
  document.getElementById("name").textContent = artist.name;
  document.getElementById("genre").textContent = "Genre: " + artist.genre;
  document.getElementById("origin").textContent = "Origin: " + artist.origin;
  document.getElementById("formed").textContent = "Formed: " + artist.formed;
  document.getElementById("label").textContent = "Label: " + artist.label;
  document.getElementById("description").textContent = artist.description;
  document.getElementById("submittedBy").textContent =
    "Submitted by: " + artist.submittedBy;
  document.getElementById("submittedOn").textContent =
    "Submitted on: " + artist.submittedOn;
  document.title = "OPM Wiki - " + artist.name;

  const linksDiv = document.getElementById("links");

  if (artist.spotifyUrl) {
    const spotify = document.createElement("a");
    spotify.textContent = "Spotify";
    spotify.href = artist.spotifyUrl;
    spotify.target = "_blank";
    spotify.className = "spotify-link";
    linksDiv.appendChild(spotify);
  }

  if (artist.websiteUrl) {
    const website = document.createElement("a");
    website.textContent = "Website";
    website.href = artist.websiteUrl;
    website.target = "_blank";
    linksDiv.appendChild(website);
  }
};

renderArtist();
