//You can edit ALL of the code here

const filmGrid = document.getElementById('film-grid');
const filterDisplay = document.querySelector('.filter-display');
const searchInput = document.getElementById('film-search');
const allEpisodes = getAllEpisodes();
const state = {
  query: '',
  films: allEpisodes,
};

const formatEpisodeCode = (prefix, value) => {
  return `${prefix}${String(value).padStart(2, 0)}`;
};

const createFilmCard = (film) => {
  console.log(film);
  const filmCardTemplate = document
    .getElementById('film-card')
    .content.cloneNode(true);
  const filmTitle = filmCardTemplate.querySelector('h2');
  filmTitle.innerText = `${name} - ${formatEpisodeCode(
    'S',
    season
  )}${formatEpisodeCode('E', number)}`;

  const filmImage = filmCardTemplate.querySelector('img');
  filmImage.src = medium;
  filmImage.alt = 'image from film';

  const filmSummary = filmCardTemplate.querySelector('.summary');
  filmSummary.innerHTML = summary;

  return filmCardTemplate;
};

function setup() {
  makePageForEpisodes(allEpisodes);
  // render();
}

// function formatEpisodeCode(episode) {
//   const season = episode.season.toString().padStart(2, "0");
//   const number = episode.number.toString().padStart(2, "0");
//   const formattedEpisodeCode = `S${season}E${number}`;
//   return formattedEpisodeCode;
// }

function makePageForEpisodes() {
  const main = document.querySelector('main');
  main.replaceChildren(); // clear all cards in main
  const attribution = document.createElement('p');
  attribution.innerHTML = `<a href="https://tvmaze.com/">The data has (originally) come from TVMaze.com</a>`;

  const { query, films } = state;
  const filmSearch = films.filter((film) => {
    return (
      film.name.toLowerCase().includes(query) ||
      film.summary.toLowerCase().includes(query)
    );
  });

  let episodeList;

  if (state.query === '') {
    episodeList = films;
    filterDisplay.innerText = '';
  } else {
    episodeList = filmSearch;
    filterDisplay.innerText = `Displaying ${filmSearch.length}/${films.length}`;
  }

  episodeList.forEach((episode) => {
    const filmCardTemplate = document
      .getElementById('film-card-template')
      .content.cloneNode(true);

    filmCardTemplate.querySelector('h3').textContent = `${
      episode.name
    } - ${formatEpisodeCode('S', episode.season)}${formatEpisodeCode(
      'E',
      episode.number
    )}`;

    filmCardTemplate.querySelector('img').src = episode.image.medium;
    filmCardTemplate.querySelector('img').alt = 'hero-image';
    filmCardTemplate.querySelector('p').innerHTML = episode.summary;

    main.append(filmCardTemplate);
  });
  main.append(attribution);

  let debounceTimer;

  searchInput.addEventListener('keyup', (e) => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      state.query = e.target.value.toLowerCase();
      makePageForEpisodes();
    }, 180);
    state.query = e.target.value.toLowerCase();

    makePageForEpisodes();
  });
}

window.onload = setup;
