//You can edit ALL of the code here
/**
 1. Fetch all episodes
 2. Filter episodes - show numbers filtered
 3. Add css
 4. Clone repository
 5. Show source of data

 */

const filmGrid = document.getElementById('film-grid');
const allEpisodes = getAllEpisodes();

const formatEpisodeCode = (prefix, value) => {
  return `${prefix}${String(value).padStart(2, 0)}`;
};

const createFilmCard = ({
  name,
  number,
  season,
  summary,
  image: { medium },
}) => {
  const filmCardTemplate = document
    .getElementById('film-card')
    .content.cloneNode(true);
  const filmTitle = filmCardTemplate.querySelector('h2');
  filmTitle.innerText = `${name} - ${formatEpisodeCode('S', season)}${formatEpisodeCode('E', number)}`;

  const filmImage = filmCardTemplate.querySelector('img');
  filmImage.src = medium;
  filmImage.alt = 'image from film';

  const filmSummary = filmCardTemplate.querySelector('.summary');
  filmSummary.innerHTML = summary;

  return filmCardTemplate;
};

function setup() {
  // makePageForEpisodes(allEpisodes);
  render();
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
