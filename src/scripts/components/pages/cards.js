import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import dateConversion from '../../helpers/dateConversion';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards to display</h1>';
};

const showCards = (array, uid) => {
  clearDom();
  if (array.length) {
    const buttonString = `
    <div id="button-container">
      <div id="filter-button-row" class="filter-button-row">
      <button class="btn btn-primary" id="cat-filter-btn--javascript">Javascript</button>
      <button class="btn btn-primary" id="cat-filter-btn--css">CSS</button>
      <button class="btn btn-primary" id="cat-filter-btn--html">HTML</button>
    </div>  
    <div class="dropdown language-dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Sort
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" id="filter-by-most-recent">Newest</a>
        <a class="dropdown-item" href="#" id="filter-by-least-recent">Oldest</a>
        <a class="dropdown-item" href="#" id="filter-by-alphabet">Alphabetically</a>
      </div>
    </div>
    </div>
    `;
    renderToDom('#button-container', buttonString);
    let domString = '';
    array.forEach((card) => {
      domString += `<div class="card">
          <div class="card-body">
          <div class="card-head">
            <h5 class="card-title">${card.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Category: ${card.language}</h6>
            <p>created on ${dateConversion(card.timestamp)}</p>
          </div>
          <div class="card-text">
            <p class="card-text flexible">${card.definition}</p>
          </div>
          <div class="card-button-group">
            ${(card.uid === uid) ? `<button class="btn btn-primary" id="edit-btn--${card.firebaseKey}">Edit</button>` : ''}
            ${(card.uid === uid) ? `<button class="btn btn-primary" id="delete-btn--${card.firebaseKey}">Delete</button>` : ''}
          </div>
          </div>
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
