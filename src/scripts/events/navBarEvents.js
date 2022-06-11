import { getAllCards, getUserCards } from '../../api/cardData';
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
    if (e.target.id.includes('homepage')) {
      getUserCards(user.uid).then((response) => showCards(response, user.uid));
    }
  });
  document.querySelector('#search-nav-input').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-nav-input').value.toLowerCase();
    if (e.keyCode === 13) {
      getUserCards(user.uid)
        .then((response) => (response.filter((card) => card.title.toLowerCase().includes(searchValue))))
        .then((filteredCards) => (showCards(filteredCards, user.uid)))
        .then(document.querySelector('#search-nav-input').value = '');
    }
  });
};

export default navEvents;
