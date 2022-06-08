import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import dateConversion from '../../helpers/dateConversion';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards to display</h1>';
};

// eslint-disable-next-line no-unused-vars
const showCards = (array, uid) => {
  clearDom();
  if (array.length) {
    let domString = `
    <div>
      <button class="btn btn-primary" id="cat-filter-btn--javascript">Javascript</button>
      <button class="btn btn-primary" id="cat-filter-btn--css">CSS</button>
      <button class="btn btn-primary" id="cat-filter-btn--html">HTML</button>
    </div>
    
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Sort
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" id="filter-by-most-recent">Newest</a>
        <a class="dropdown-item" href="#" id="filter-by-least-recent">Oldest</a>
        <a class="dropdown-item" href="#" id="filter-by-alphabet">Alphabetically</a>
      </div>
    </div>`;
    array.forEach((card) => {
      domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.definition}</p>
        <button class="btn btn-primary" id="edit-btn--${card.firebaseKey}">Edit</button>
        <button class="btn btn-primary" id="delete-btn--${card.firebaseKey}">Delete</button>
        <p>Date created: ${dateConversion(card.timestamp)}</p>
        <p>Category: ${card.language}</p>
        </div>
      </div>
    `;
    });
    renderToDom('#card-container', domString);
  } else {
    emptyCards();
  }
};

export { emptyCards, showCards };
