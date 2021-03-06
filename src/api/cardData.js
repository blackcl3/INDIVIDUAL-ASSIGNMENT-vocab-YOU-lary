import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/cards.json?orderBy="public"&equalTo=true`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getUserCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/cards/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(((response.data)));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createCards = (uid, payload) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/cards.json`, payload)
    .then((response) => {
      const updatePayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/cards/${updatePayload.firebaseKey}.json`, updatePayload)
        .then(() => {
          getUserCards(uid)
            .then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const editCards = (firebaseKey, payload) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/cards/${firebaseKey}.json`, payload)
    .then(() => {
      getUserCards(payload.uid)
        .then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteCard = (uid, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/cards/${firebaseKey}.json`)
    .then(() => {
      getUserCards(uid)
        .then(resolve);
    })
    .catch((error) => reject(error));
});

const copyCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  getSingleCard(firebaseKey)
    .then((response) => axios.post(`${dbURL}/cards.json`, response)
      .then((updatedCard) => {
        const updatePayload = { firebaseKey: updatedCard.data.name, uid };
        axios.patch(`${dbURL}/cards/${updatePayload.firebaseKey}.json`, updatePayload)
          .then(() => {
            getUserCards(uid)
              .then(resolve);
          });
      }))
    .catch(reject);
});

const filterAlphabetically = (uid) => new Promise((resolve, reject) => {
  getUserCards(uid).then((response) => resolve(response.sort((a, b) => a.title.localeCompare(b.title))))
    .catch(reject);
});

const filterByTimestamp = (uid) => new Promise((resolve, reject) => {
  getUserCards(uid).then((response) => resolve(response.sort((a, b) => a.timestamp - b.timestamp)))
    .catch(reject);
});

const filterByLanguage = (uid, cardCategory) => new Promise((resolve, reject) => {
  getUserCards(uid).then((response) => resolve(response.filter((card) => card.language === cardCategory)))
    .catch(reject);
});

export {
  getAllCards,
  getUserCards,
  getSingleCard,
  createCards,
  editCards,
  deleteCard,
  copyCard,
  filterAlphabetically,
  filterByTimestamp,
  filterByLanguage
};
