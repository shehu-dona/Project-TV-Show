//You can edit ALL of the code here

const filmGrid = document.getElementById('film-grid');
const filterDisplay = document.querySelector('.filter-display');
const searchInput = document.getElementById('film-search');
const allEpisodes = getAllEpisodes();

// track state of changes - eg input searches
const state = {
  query: '',
  films: allEpisodes,
};

function setup() {
  renderFilms();
}

// formats episode and season numbers to show 2 digits
const formatEpisodeCode = (prefix, value) =>
  `${prefix}${String(value).padStart(2, '0')}`;

const createFilmCard = (film) => {
  const {
    name,
    season,
    number,
    image: { medium },
    summary,
  } = film;
  const filmCard = document
    .getElementById('film-card-template')
    .content.cloneNode(true);
  const title = filmCard.querySelector('h3');
  title.innerText = `${name} - ${formatEpisodeCode('S', season)}${formatEpisodeCode('E', number)}`;

  const filmImage = filmCard.querySelector('img');
  filmImage.src = medium;
  filmImage.alt = 'image from film';

  const filmSummary = filmCard.querySelector('p');
  filmSummary.innerHTML = summary;

  return filmCard;
};

const renderFilms = () => {
  const rootElem = document.getElementById('film-grid');
  // clear film grid before repopulating it
  rootElem.innerHTML = '';

  // input query searches
  const { query, films } = state;
  const filmSearch = films.filter((film) => {
    return (
      film.name.toLowerCase().includes(query) ||
      film.summary.toLowerCase().includes(query)
    );
  });

  let episodeList;

  // check if film list is filtered or not
  if (state.query === '') {
    episodeList = films;
    filterDisplay.innerText = '';
  } else {
    episodeList = filmSearch;
    filterDisplay.innerText = `Displaying ${filmSearch.length}/${films.length}`;
  }
  // create film cards and append to film-grid
  const filmCards = episodeList.map(createFilmCard);
  rootElem.append(...filmCards);
};

searchInput.addEventListener('input', (e) => {
  state.query = e.target.value.toLowerCase();
  renderFilms();
});

window.onload = setup;
