import './styles.css';
import pnotifyMessage from './js/pnotifyMessage';
import getCountry from './js/getCountry';
import clear from './js/clear';
const debounce = require('lodash.debounce');

const refs = {
  baseUrl: 'https://restcountries.eu/rest/v2/name/',
  form: document.querySelector('#form'),
  inputForm: document.querySelector('#input-form'),
};

function handleCountryName() {
  if (refs.inputForm.value) {
    getCountry(refs.baseUrl + refs.inputForm.value);
  } else {
    clear();
    pnotifyMessage('info', 'Please, enter a country name');
  }
}

pnotifyMessage('info', 'Please, enter a country name');

refs.form.addEventListener('submit', e => e.preventDefault());

refs.inputForm.addEventListener('input', debounce(handleCountryName, 500));
