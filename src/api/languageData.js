/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getUserCards } from './cardData';

const dbURL = firebaseConfig.databaseURL;

const getLanguageByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/language.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createNewLanguage = (uid, payload) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/language.json`, payload)
    .then((response) => {
      const updateFirebasekey = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/language/${updateFirebasekey.firebaseKey}.json`, updateFirebasekey)
        .then(() => {
            getLanguageByUID(uid)
              .then(resolve);
            });
      })
    .catch(reject);
});

export { getLanguageByUID, createNewLanguage };
