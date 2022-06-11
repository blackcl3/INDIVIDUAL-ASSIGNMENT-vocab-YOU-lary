/* eslint-disable no-unused-vars */
import { createCards, editCards, getUserCards } from '../../api/cardData';
import { createNewLanguage } from '../../api/languageData';
import { showCards } from '../components/pages/cards';
import showLanguageButtonRow from '../components/pages/languageButtonRow';

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
    if (e.target.id.includes('add-new-language-form')) {
      const newLanguage = {
        category: document.querySelector('#category').value,
        uid
      };
      createNewLanguage(uid, newLanguage)
        .then((response) => showLanguageButtonRow(response))
        .then(getUserCards(uid).then((cardArray) => showCards(cardArray)));
    }
  });
};

export default formEvents;
