import { getAllCards } from '../../api/cardData';
import cardEntryForm from '../components/forms/createEntryForm';
import { showCards } from '../components/pages/cards';

const navEvents = (user) => {
  document.querySelector('#main-navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry-btn')) {
      cardEntryForm(user);
    }
    if (e.target.id.includes('public-directory-btn')) {
      getAllCards().then((response) => showCards(response, user.uid));
    }
  });
};

export default navEvents;
