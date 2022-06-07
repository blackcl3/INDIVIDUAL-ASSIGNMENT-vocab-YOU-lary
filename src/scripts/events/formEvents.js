import { createCards, editCards } from '../../api/cardData';
import { showCards } from '../components/pages/cards';

const formEvents = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('card-submit')) {
      const newCard = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        timestamp: Date.now(),
        language: document.querySelector('#language').value,
        public: false,
        uid,
      };
      createCards(uid, newCard).then((updatedArray) => showCards(updatedArray));
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedCard = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        public: false,
        uid,
        firebaseKey,
      };
      editCards(firebaseKey, updatedCard).then((updatedArray) => showCards(updatedArray));
    }
  });
};

export default formEvents;
