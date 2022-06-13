import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const createNewLanguageForm = () => {
  clearDom();
  const domString = `
  <form id="add-new-language-form" class="container add-new-language-form">
  <div class="form-group language-form-input">
    <label for="category">Category/Language Name</label>
    <textarea placeholder="title" id="category" class="form-control"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
  renderToDom('#button-container', domString);
};

export default createNewLanguageForm;
