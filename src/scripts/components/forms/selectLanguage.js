import { getLanguageByUID } from '../../../api/languageData';
import renderToDom from '../../helpers/renderToDom';

const selectLanguage = (uid, cardObjCategory) => {
  let domString = `<label for="language">Select a Language/Technology</label>
        <select id="language">
          <option value="">Select a Language</option>`;
  getLanguageByUID(uid)
    .then((languageArray) => {
      languageArray.forEach((language) => {
        domString += `
        <option value="${language.category}"
        ${((language.category.toLowerCase()) === (cardObjCategory.toLowerCase())) ? 'selected' : ''}>
        ${language.category}
        </option>`;
      });
      domString += '</select';
      renderToDom('#select-language', domString);
    });
};

export default selectLanguage;
