const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
