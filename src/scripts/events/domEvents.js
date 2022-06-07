import { getSingleCard, deleteCard } from '../../api/cardData';
import cardEntryForm from '../components/forms/createEntryForm';
import { showCards } from '../components/pages/cards';

const domEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((response) => cardEntryForm(uid, response));
    }
    if (e.target.id.includes('delete-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCard(uid, firebaseKey).then((response) => showCards(response));
    }
  });
};

export default domEvents;
