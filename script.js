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
  const rootElem = document.getElementById("root");
  const attribution = document.createElement("p");
  attribution.innerHTML = `<a href="https://tvmaze.com/">The data has (originally) come from TVMaze.com</a>`;

  episodeList.forEach((episode) => {
    const episodeDiv = document.createElement("div");
    const title = document.createElement("h3");
    const image = document.createElement("img");
    const summaryParagraph = document.createElement("p");

    title.textContent = `${episode.name} - ${formatEpisodeCode(episode)}`;

    image.src = episode.image.medium;
    image.alt = "Image Cover";

    summaryParagraph.innerHTML = episode.summary;

    rootElem.appendChild(episodeDiv);
    episodeDiv.appendChild(title);
    episodeDiv.appendChild(image);
    episodeDiv.appendChild(summaryParagraph);
  });
  rootElem.appendChild(attribution);
}

window.onload = setup;
