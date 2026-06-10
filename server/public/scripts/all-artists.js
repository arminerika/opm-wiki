let allArtists = [];

const renderArtists = (artists) => {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  if (artists.length > 0) {
    artists.map((artist) => {
      mainContent.innerHTML += `
        <article 
          style="background: url(${artist.image}); background-repeat: no-repeat; background-size: cover; background-position: center center"
          onclick="window.location='/artists/${artist.id}'">
          <div class="artist-card-overlay">
            <div class="artist-brief artist-card-name">
              <h3>${artist.name}</h3>
              <hr>
              <div class="artist-brief artist-card-genre">
                <p>${artist.genre}</p>
                <p>${artist.origin}</p>
                <p>${artist.formed}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    });
  } else {
    mainContent.innerHTML = '<h2 class="no-results">No artists found 😔</h2>';
  }
};

const setupSearch = () => {
  const searchContainer = document.getElementById("search-container");

  searchContainer.innerHTML = `
    <div class="search-bar">
      <input type="text" id="search-input" placeholder="Search artists, genre, origin..." />
      <button id="random-btn">🎲 Random Artist</button>
    </div>
  `;

  document.getElementById("search-input").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allArtists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(query) ||
        artist.genre.toLowerCase().includes(query) ||
        artist.origin.toLowerCase().includes(query),
    );
    renderArtists(filtered);
  });

  document.getElementById("random-btn").addEventListener("click", () => {
    const random = allArtists[Math.floor(Math.random() * allArtists.length)];
    window.location.href = `/artists/${random.id}`;
  });
};

const init = async () => {
  const response = await fetch("/artists");
  allArtists = await response.json();
  setupSearch();
  renderArtists(allArtists);
};

init();
