import { getUserCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import { showCards } from '../components/pages/cards';
import renderNavBar from '../components/pages/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navBarEvents';

const startApp = (user) => {
  domBuilder();
  renderNavBar(user);
  navEvents(user);
  formEvents(user.uid);
  getUserCards(user.uid).then((cards) => showCards(cards, user.uid));
  domEvents(user.uid);
};

export default startApp;
