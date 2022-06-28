const url = 'https://api.rawg.io/api/games?key=38431e3c826c4909aac5bc1cecef399c';

var requestOptions = {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    redirect: "follow",
  };

  fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => getGames(result))
  .catch((error) => console.log("error", error));

function getGames(result) {
  for (let index = 0; index < result.results.length; index++) {
    console.log(result.results[index]);
    renderGames(result.results[index]);
  }
}

var cardContent = "";

function renderGames(game) {
  cardContent += 
    `<div class="games__card" id="gamesp">
    <img class="game__img" src="${game.background_image}" alt="Game caratula of ${game.name}" />
    <p class="game__name">${game.name}</p>
    <p class="game__rating">#${game.rating}</p>
    <p class="game__date">Realease date</p>
    <p class="game__date2">${game.released}</p>
    <p class="game__genres">Genres</p>
    <p class="game__genres2">${getGenres(game.genres)}</p>
    </div>`;

  var games = document.getElementById("games");
  games.innerHTML = cardContent;
}

function getGenres(genres) {
  console.log(genres[0].name);
  var genresNames = "";

  for (let index = 0; index < genres.length; index++) {
    genresNames += `${genres[index].name} `;
  }
  return genresNames;
}


