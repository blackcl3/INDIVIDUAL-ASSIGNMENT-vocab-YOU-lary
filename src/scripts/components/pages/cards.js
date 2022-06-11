import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import dateConversion from '../../helpers/dateConversion';

const emptyCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards to display</h1>';
};

const showCards = (array, uid) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((card) => {
      domString += `<div class="card">
          <div class="card-body">
          <div class="card-head">
            <h5 class="card-title">${card.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Category: ${card.language}</h6>
            <span>${card.public ? `<button id="public--${card.firebaseKey}" class="btn btn-danger"><span><i class="fas fa-eye"></i> Public</span></button>` : `<button id="private--${card.firebaseKey}" class="btn btn-success"><span><i class="fas fa-eye-slash" "></i> Private</span></button>`}</span>
            <p>created on ${dateConversion(card.timestamp)}</p>
          </div>
          <div class="card-text">
            <p>${card.definition}</p>
          </div>
          <div class="card-button-group">
            ${!(card.uid === uid) ? `<button class="btn btn-primary" id="copy-btn--${card.firebaseKey}">Copy</button>` : ''}
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
