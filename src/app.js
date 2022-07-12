import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      flagImgURL: null,
      countries: [],
      selectedCountry: null
    },
    mounted(){
      // this.fetchFlag();
      this.fetchCountries();
    },
    methods: {
      fetchFlag: function(){
        fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.flagImgURL = data[6].flag);
      },
      fetchCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(countries => countries.json())
        .then(data => this.countries = data)
      }
    }
  });
});
// Comment Comment Comment