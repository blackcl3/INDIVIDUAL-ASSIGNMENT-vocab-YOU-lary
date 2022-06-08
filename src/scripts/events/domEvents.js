import {
  getSingleCard,
  deleteCard,
  filterAlphabetically,
  filterByTimestamp,
  filterByLanguage
} from '../../api/cardData';
import cardEntryForm from '../components/forms/createEntryForm';
import { showCards } from '../components/pages/cards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((response) => cardEntryForm(uid, response));
    }
    if (e.target.id.includes('delete-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCard(uid, firebaseKey).then((showCards));
    }
    if (e.target.id.includes('filter-by-most-recent')) {
      filterByTimestamp(uid).then((response) => showCards(response.reverse()));
    }
    if (e.target.id.includes('filter-by-least-recent')) {
      filterByTimestamp(uid).then((showCards));
    }
    if (e.target.id.includes('filter-by-alphabet')) {
      filterAlphabetically(uid).then((showCards));
    }
    if (e.target.id.includes('cat-filter-btn')) {
      const [, category] = e.target.id.split('--');
      filterByLanguage(uid, category).then((showCards));
    }
  });
};

export default domEvents;
