import renderToDom from '../../helpers/renderToDom';

const cardEntryForm = () => {
  const domString = `
    <form id="card-submit">
      <div class="form-group">
        <label>Title of Card</label>
        <input id="title" type="text class="form-control">
      </div>
      <div class="form-group">
        <label>Definition</label>
        <input id="definition" type="textarea" class="form-control>
      </div>
      <div class="form-group">
        <select id="language">
          <option value="">Select a Language</option>
          <option value="javascript">Javascript</option>
        </select>
      </div>
       <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  renderToDom('#app', domString);
};

export default cardEntryForm;
