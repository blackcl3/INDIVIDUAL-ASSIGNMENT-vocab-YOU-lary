import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="card-container"></div>
  </div>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;
