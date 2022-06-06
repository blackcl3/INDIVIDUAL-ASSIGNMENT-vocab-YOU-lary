import cardEntryForm from '../components/forms/createEntryForm';

const navEvents = (uid) => {
  document.querySelector('#main-navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry-btn')) {
      cardEntryForm(uid);
    }
  });
};

export default navEvents;
