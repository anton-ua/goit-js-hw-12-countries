import returnOneCountry from './returnOneCountry';
import returnListCountries from './returnListCountries';
import PNotify from 'pnotify/dist/es/PNotify';
import pnotifyMessage from './pnotifyMessage';
import clear from './clear';

export default function getCountry(url) {
  clear();
  return fetch(url)
    .then(response => response.json())
    .then(country => {
      if (country.length === 1) {
        PNotify.closeAll();
        returnOneCountry(country[0]);
      } else if (country.length <= 10) {
        PNotify.closeAll();
        returnListCountries(country);
      } else if (country.status === 404) {
        pnotifyMessage('error', country.message);
      } else {
        pnotifyMessage(
          'error',
          'To many matches found. Please enter a more specific query!',
        );
      }
    });
}
