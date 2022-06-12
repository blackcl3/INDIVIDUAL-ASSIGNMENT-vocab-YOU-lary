import {
  getSingleCard,
  deleteCard,
  filterAlphabetically,
  filterByTimestamp,
  filterByLanguage,
  copyCard,
  editCards,
} from '../../api/cardData';
import cardEntryForm from '../components/forms/createEntryForm';
import { showCards } from '../components/pages/cards';
import createNewLanguageForm from '../components/forms/createNewLanguage';
import { getLanguageByUID } from '../../api/languageData';
import showLanguageButtonRow from '../components/pages/languageButtonRow';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((response) => cardEntryForm(uid, response));
    }
    if (e.target.id.includes('delete-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCard(uid, firebaseKey)
        .then((updatedCards) => (showCards(updatedCards, uid)))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('filter-by-most-recent')) {
      filterByTimestamp(uid)
        .then((response) => showCards(response.reverse(), uid))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('filter-by-least-recent')) {
      filterByTimestamp(uid)
        .then((filteredCards) => (showCards(filteredCards, uid)))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('filter-by-alphabet')) {
      filterAlphabetically(uid)
        .then((filteredCards) => (showCards(filteredCards, uid)))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('cat-filter-btn')) {
      const [, category] = e.target.id.split('--');
      filterByLanguage(uid, category)
        .then((filteredCards) => (showCards(filteredCards, uid)))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('add-new-language-btn')) {
      createNewLanguageForm(uid);
    }
    if (e.target.id.includes('copy-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      copyCard(firebaseKey, uid).then((updatedCards) => showCards(updatedCards, uid))
        .then(() => {
          getLanguageByUID(uid)
            .then(((languages) => showLanguageButtonRow(languages)));
        });
    }
    if (e.target.id.includes('toggle-privacy-btn')) {
      const [, cardFirebaseKey] = e.target.id.split('--');
      getSingleCard(cardFirebaseKey).then((response) => {
        if (response.public === false) {
          response.public = true;
          editCards(cardFirebaseKey, response)
            .then((updatedCards) => showCards(updatedCards, uid))
            .then(() => {
              getLanguageByUID(uid)
                .then(((languages) => showLanguageButtonRow(languages)));
            });
        } else if (response.public === true) {
          response.public = false;
          editCards(cardFirebaseKey, response)
            .then((updatedCards) => showCards(updatedCards, uid))
            .then(() => {
              getLanguageByUID(uid)
                .then(((languages) => showLanguageButtonRow(languages)));
            });
        }
      });
    }
  });
};

export default domEvents;
