import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

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
      <div class="form-group">
        <select id="language">
          <option value="">Select a Language</option>
          <option value="javascript">Javascript</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
      </div>
       <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  renderToDom('#form-container', domString);
};

export default cardEntryForm;
