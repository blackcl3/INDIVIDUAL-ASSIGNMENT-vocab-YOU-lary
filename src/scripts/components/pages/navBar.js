import image from '../../../styles/assets/gettyimages-91915309-46d7af11-fe0e-444c-a3fa-dacae08fea25.jpeg';
import renderToDom from '../../helpers/renderToDom';

const renderNavBar = (user) => {
  const domString = `<div class="container">
    <nav class="navbar" id="main-navbar">
      <div class="main-logo">
        <h1 class="navbar-brand" id="homepage">vocab-YOU-Larry!</h1>
        <img src="${image}" class="header-image" alt=''>
      </div>
      <div class="form-inline" id="nav-bar-btn-group">
        <button class="nav-link" id="create-entry-btn" type="button">Create Entry</button>
        <button class="nav-link" id="public-directory-btn" type="button">Public Directory</button>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-nav-input">
      </div>
    <h5 id="nav-bar-welcome-h5">Welcome, ${user.displayName ? user.displayName : 'Please log in'}!</h5>
    <div id="logout-button-div">
    </div>
    </nav>
  </div>`;
  renderToDom('#navigation', domString);
};

export default renderNavBar;
