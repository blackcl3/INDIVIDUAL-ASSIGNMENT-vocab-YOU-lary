/* eslint-disable no-unused-vars */
import { getUserCards } from '../../api/cardData';
import getLanguageByUID from '../../api/languageData';
import domBuilder from '../components/domBuilder';
import { showCards } from '../components/pages/cards';
import showLanguageButtonRow from '../components/pages/languageButtonRow';
import renderNavBar from '../components/pages/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navBarEvents';

const startApp = (user) => {
  domBuilder();
  renderNavBar(user);
  getUserCards(user.uid).then((cards) => showCards(cards, user.uid));
  getLanguageByUID(user.uid).then((languages) => showLanguageButtonRow(languages));
  domEvents(user.uid);
  formEvents(user.uid);
  navEvents(user);
};

export default startApp;
