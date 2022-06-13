const clearNavBar = () => {
  document.querySelector('#nav-bar-btn-group').innerHTML = '';
  document.querySelector('#nav-bar-welcome-h5').innerText = 'Please Log In';
};

export default clearNavBar;
