import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getLanguageByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/language.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getLanguageByUID;
