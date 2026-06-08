const renderArtists = async () => {
  const response = await fetch("/artists");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((artist) => {
      mainContent.innerHTML += `
        <article style="background: url(${artist.image}); background-repeat: no-repeat; background-size: cover; background-position: center center">
          <div class="artist-card-overlay">
            <div class="artist-brief artist-card-name">
              <h3>${artist.name}</h3>
              <hr>
              <div class="artist-brief artist-card-genre">
                <p>${artist.genre} · ${artist.origin}</p>
                <div class="artist-brief artist-card-link">
                  <a href="/artists/${artist.id}" role="button">Info</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    });
  } else {
    mainContent.innerHTML = "<h2>No Artists Available 😔</h2>";
  }
};

renderArtists();
