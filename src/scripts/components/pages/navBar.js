import image from '../../../styles/assets/gettyimages-91915309-46d7af11-fe0e-444c-a3fa-dacae08fea25.jpeg';
import renderToDom from '../../helpers/renderToDom';
import logoutButton from '../logoutButton';

const renderNavBar = (user) => {
  const domString = `<nav class="navbar" id="main-navbar">
      <h1 class="navbar-brand" id="homepage">vocab-YOU-Lary!</h1>
      <img src="${image}" class="header-image" alt=''>
      <form class="form-inline">
        <button class="nav-link" id="create-entry-btn" type="button">Create Entry</button>
        <button class="nav-link" id="public-directory-btn" type="button">Public Directory</button>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-nav-input">
      </form>
    <h5>Welcome, ${user.displayName}!</h5>
  </nav>`;
  renderToDom('#navigation', domString);
  logoutButton();
};

export default renderNavBar;
