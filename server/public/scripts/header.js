const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "OPM Wiki";
headerTitle.addEventListener("click", () => (window.location = "/"));
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.addEventListener("click", () => (window.location = "/"));

const allArtistsButton = document.createElement("button");
allArtistsButton.textContent = "All Artists";
allArtistsButton.addEventListener(
  "click",
  () => (window.location = "/all-artists"),
);

headerRight.appendChild(homeButton);
headerRight.appendChild(allArtistsButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
