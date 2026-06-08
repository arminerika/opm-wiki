const renderSpotlight = async () => {
  const response = await fetch("/artists");
  const data = await response.json();

  if (!data || data.length === 0) return;

  // Pick a random artist for the spotlight
  const artist = data[Math.floor(Math.random() * data.length)];

  // Extract Spotify artist ID from the URL
  const spotifyId = artist.spotifyUrl
    ? artist.spotifyUrl.split("/").pop()
    : null;

  const mainContent = document.getElementById("main-content");

  mainContent.innerHTML = `
    <section class="spotlight">
      <div class="spotlight-header">
        <h2>Artist Spotlight</h2>
        <p>Discover something new</p>
      </div>
      <div class="spotlight-content">
        <div class="spotlight-info">
          <img src="${artist.image}" alt="${artist.name}" class="spotlight-image">
          <div class="spotlight-details">
            <h3>${artist.name}</h3>
            <p class="spotlight-genre">${artist.genre} · ${artist.origin}</p>
            <p class="spotlight-formed">Formed: ${artist.formed}</p>
            <p class="spotlight-label">Label: ${artist.label}</p>
            <p class="spotlight-description">${artist.description}</p>
            <a href="/artists/${artist.id}" class="spotlight-link">Read More ></a>
          </div>
        </div>
        ${
          spotifyId
            ? `
        <div class="spotlight-embed">
          <iframe
            src="https://open.spotify.com/embed/artist/${spotifyId}"
            width="100%"
            height="380"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
        `
            : ""
        }
      </div>
    </section>
  `;
};

renderSpotlight();
