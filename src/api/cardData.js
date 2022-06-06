import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      console.warn(response);
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createCards = (uid, payload) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/cards.json`, payload)
    .then(() => {
      getCards(uid)
        .then(resolve);
    })
    .catch((error) => reject(error));
});

export { getCards, createCards };
