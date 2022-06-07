import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

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

// editCards below to reflect firebasekey or card obj as param passed in axios.patch
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

export {
  getCards,
  getSingleCard,
  createCards,
  editCards,
  deleteCard
};
