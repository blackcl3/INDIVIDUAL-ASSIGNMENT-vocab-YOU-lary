import { getCards } from '../../api/cardData';
import { showCards } from '../components/pages/cards';
import renderNavBar from '../components/pages/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navBarEvents';

const startApp = (user) => {
  renderNavBar(user);
  navEvents(user);
  formEvents(user.uid);
  getCards(user.uid).then((cards) => showCards(cards));
  domEvents(user.uid);
};

export default startApp;
