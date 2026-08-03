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

const render = () => {
  const filmCards = allEpisodes.map(createFilmCard);
  console.log(filmCards);
  filmGrid.innerHTML = '';
  filmGrid.append(...filmCards);
};

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById('root');
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

window.onload = setup;
