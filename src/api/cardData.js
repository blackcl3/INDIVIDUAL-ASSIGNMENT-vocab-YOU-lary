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

const getCards = (uid) => new Promise((resolve, reject) => {
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
          getCards(uid)
            .then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const editCards = (firebaseKey, payload) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/cards/${firebaseKey}.json`, payload)
    .then(() => {
      getCards(payload.uid)
        .then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteCard = (uid, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid)
        .then(resolve);
    })
    .catch((error) => reject(error));
});

const filterAlphabetically = (uid) => new Promise((resolve, reject) => {
  getCards(uid).then((response) => resolve(response.sort((a, b) => a.title.localeCompare(b.title))))
    .catch(reject);
});

const filterByTimestamp = (uid) => new Promise((resolve, reject) => {
  getCards(uid).then((response) => resolve(response.sort((a, b) => a.timestamp - b.timestamp)))
    .catch(reject);
});

const filterByLanguage = (uid, cardCategory) => new Promise((resolve, reject) => {
  getCards(uid).then((response) => resolve(response.filter((card) => card.language === cardCategory)))
    .catch(reject);
});

export {
  getAllCards,
  getCards,
  getSingleCard,
  createCards,
  editCards,
  deleteCard,
  filterAlphabetically,
  filterByTimestamp,
  filterByLanguage
};
