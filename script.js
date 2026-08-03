//You can edit ALL of the code here
/**
 1. Fetch all episodes
 2. Filter episodes - show numbers filtered
 3. Add css
 4. Clone repository
 5. Show source of data

 */
const filmCardTemplate = document
  .getElementById('film-card')
  .content.cloneNode(true);
const allEpisodes = getAllEpisodes();
function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById('root');
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
