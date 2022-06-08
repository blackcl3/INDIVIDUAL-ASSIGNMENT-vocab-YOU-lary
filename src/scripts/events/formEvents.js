import { createCards, editCards } from '../../api/cardData';
import { showCards } from '../components/pages/cards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
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
      createCards(uid, newCard).then((updatedCards) => showCards(updatedCards, uid));
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
      editCards(firebaseKey, updatedCard).then((updatedCards) => showCards(updatedCards, uid));
    }
  });
};

export default formEvents;
