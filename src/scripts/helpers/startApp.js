import { getCards } from '../../api/cardData';
import { showCards } from '../components/pages/cards';
import renderNavBar from '../components/pages/navBar';
import formEvents from '../events/formEvents';
import navEvents from '../events/navBarEvents';

const startApp = (user) => {
  renderNavBar(user);
  navEvents(user);
  formEvents(user.uid);
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
