//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function formatEpisodeCode(episode) {
  const season = episode.season.toString().padStart(2, "0");
  const number = episode.number.toString().padStart(2, "0");
  const formattedEpisodeCode = `S${season}E${number}`;
  return formattedEpisodeCode;
}

function makePageForEpisodes(episodeList) {
  const attribution = document.createElement("p");
  attribution.innerHTML = `<a href="https://tvmaze.com/">The data has (originally) come from TVMaze.com</a>`;
  const main = document.querySelector("main");

  episodeList.forEach((episode) => {
    const filmCardTemplate = document
      .getElementById("film-card-template")
      .content.cloneNode(true);

    filmCardTemplate.querySelector("h3").textContent = `${
      episode.name
    } - ${formatEpisodeCode(episode)}`;

    filmCardTemplate.querySelector("img").src = episode.image.medium;
    filmCardTemplate.querySelector("img").alt = "hero-image";
    filmCardTemplate.querySelector("p").innerHTML = episode.summary;

    main.append(filmCardTemplate);
  });
  main.append(attribution);
}

window.onload = setup;
