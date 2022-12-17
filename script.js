const template = document.querySelector("#template");
const elCards = document.querySelector(".cards");
let films = [];
fetch(`https://www.omdbapi.com/?s=avengers&plot=full&apikey=d0f554ef`)
  .then((res) => res.json())
  .then((data) => {
    films = data.Search;
    renderFilms(films);
  })
  .catch((err) => console.log(err));

function renderFilms(films) {
  const fragment = document.createDocumentFragment();
  films.forEach((item) => {
    console.log(item);
    const cloneTemplate = template.content.cloneNode(true);
    const image = cloneTemplate.querySelector(".card-img-top");
    const title = cloneTemplate.querySelector(".card-title");
    const cardYear = cloneTemplate.querySelector(".year");
    const type = cloneTemplate.querySelector(".float-right");

    image.src = item.Poster;
    title.textContent = item.Title;
    cardYear.textContent = item.Year + ' | ';
    type.textContent = item.Type;
    fragment.append(cloneTemplate);
  });
  elCards.append(fragment);
}


// https://www.imdb.com/title/tt13443470/
