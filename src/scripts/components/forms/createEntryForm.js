import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';
import selectLanguage from './selectLanguage';

const cardEntryForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'card-submit'}">
      <div class="form-group">
        <label>Title of Card</label>
        <input id="title" type="text class="form-control" value="${obj.title || ''}">
      </div>
      <div class="form-group">
        <label>Definition</label>
        <textarea id="definition" type="textarea" class="form-control">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
       <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  renderToDom('#form-container', domString);
  selectLanguage(uid, `${obj.language || ''}`);
};

export default cardEntryForm;
