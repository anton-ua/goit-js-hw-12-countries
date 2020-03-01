const refs = {
  country: document.querySelector('.country'),
  countryList: document.querySelector('.country-list'),
};

export default function clear() {
  refs.country.innerHTML = '';
  refs.countryList.innerHTML = '';
}
