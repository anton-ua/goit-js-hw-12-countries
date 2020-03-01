import countryTemplate from '../template/countryTemplate.hbs';

const refs = {
  country: document.querySelector('.country'),
};

export default function returnOneCountry(country) {
  refs.country.innerHTML = '';
  const markup = countryTemplate(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}
