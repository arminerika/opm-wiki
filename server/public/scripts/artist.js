const renderArtist = async () => {
  const idString = window.location.href.split("/").pop();

  if (!/^\d+$/.test(idString)) {
    window.location.href = "/404";
    return;
  }

  const requestedID = parseInt(idString);

  const response = await fetch("/artists");
  const data = await response.json();

  const artistContent = document.getElementById("artist-content");

  let artist;

  if (data) {
    artist = data.find((artist) => artist.id === requestedID);
  }

  if (artist) {
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
      linksDiv.appendChild(spotify);
    }

    if (artist.websiteUrl) {
      const website = document.createElement("a");
      website.textContent = "Website";
      website.href = artist.websiteUrl;
      website.target = "_blank";
      linksDiv.appendChild(website);
    }
  } else {
    window.location.href = "/404";
  }
};

renderArtist();
