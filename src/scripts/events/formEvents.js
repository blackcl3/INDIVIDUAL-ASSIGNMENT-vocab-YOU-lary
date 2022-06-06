import { createCards } from '../../api/cardData';
// eslint-disable-next-line no-unused-vars
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
  });
};

export default formEvents;
