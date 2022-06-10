import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const createNewLanguageForm = () => {
  clearDom();
  const domString = `
  <form id="add-new-language-form">
  <label>Category/Language Name</label>
  <textarea placeholder="title" id="category"></textarea>
  <button type="submit">Submit</button>
  </form>
  `;
  renderToDom('#main-container', domString);
};

export default createNewLanguageForm;
