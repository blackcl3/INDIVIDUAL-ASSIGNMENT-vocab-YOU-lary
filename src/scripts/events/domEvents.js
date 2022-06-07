import { getSingleCard } from '../../api/cardData';
import cardEntryForm from '../components/forms/createEntryForm';

const domEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((response) => cardEntryForm(uid, response));
    }
  });
};

export default domEvents;
