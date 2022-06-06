import renderToDom from '../../helpers/renderToDom';
import logoutButton from '../logoutButton';

const renderNavBar = (user) => {
  const domString = `<nav class="navbar" id="main-navbar">
      <h1 class="navbar-brand" href="#">vocab-YOU-Lary!</h1>
      <form class="form-inline">
        <button class="nav-link" id="create-entry-btn" type="button">Create Entry</button>
        <button class="nav-link" id="public-directory-btn" type="button">Public Directory</button>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    <h5>Welcome, ${user.displayName}!</h5>
  </nav>`;
  renderToDom('#login-form-container', domString);
  logoutButton();
};

export default renderNavBar;
