import renderToDom from '../../helpers/renderToDom';

const showLanguageButtonRow = (array) => {
  document.querySelector('#button-container').innerHTML = '';
  if (array.length) {
    let buttonString = `
      <div id="filter-button-row" class="filter-button-row form-inline">
      <button class="btn btn-primary" id="add-new-language-btn">Add a New Language</button>`;
    array.forEach((languageButton) => {
      buttonString += `<button class="btn btn-primary language-btn" id="cat-filter-btn--${languageButton.category}">${languageButton.category}</button>`;
    });
    buttonString += `<div class="dropdown language-dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" id="filter-by-most-recent">Newest</a>
        <a class="dropdown-item" href="#" id="filter-by-least-recent">Oldest</a>
        <a class="dropdown-item" href="#" id="filter-by-alphabet">Alphabetically</a>
      </div>
    </div>
    </div>`;
    renderToDom('#button-container', buttonString);
  }
};

export default showLanguageButtonRow;
