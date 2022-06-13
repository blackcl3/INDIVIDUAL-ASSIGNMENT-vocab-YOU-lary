import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';
import clearNavBar from '../helpers/clearNavBar';

const signMeOut = () => {
  clearNavBar();
  clearDom();
  firebase.auth().signOut();
  document.querySelector('#logout-button-div').innerHTML = '';
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button-div').innerHTML += (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
