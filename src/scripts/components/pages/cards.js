import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards to display</h1>';
};

// eslint-disable-next-line no-unused-vars
const showCards = (array, uid) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((card) => {
      domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.definition}</p>
        <button class="btn btn-primary" id="edit-btn--${card.firebaseKey}">Edit</button>
        <button class="btn btn-primary" id="delete-btn--${card.firebaseKey}">Delete</button>
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
