const refs = {
  countryList: document.querySelector('.country-list'),
};

export default function returnListCountries(countries) {
  refs.countryList.innerHTML = '';
  countries.map(country =>
    refs.countryList.insertAdjacentHTML(
      'beforeend',
      `<li class="country-item">${country.name}</li>`,
    ),
  );
}
