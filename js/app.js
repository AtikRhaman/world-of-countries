// Declarations and initializations
const numberOfCountries = document.querySelector("#number-of-countries");
const searchInNumbers = document.querySelector("#search-in-numbers");
const countryContainer = document.querySelector("#country-container");
const btnSort = document.querySelector("#btn_sort");
const inputCountryName = document.querySelector("#input_country_name");
const startingWord = document.querySelector("#starting-word");
const searchWithWord = document.querySelector("#search-with-word");
let countriesArry = [...countries]
let startWithAnyWord;
let serchWord;
// Number of Countries
let totalCountries = `${countriesArry.length}`;
numberOfCountries.append(totalCountries);

// ===== Get country name =====
const getCountryName = countriesArry => {
    for (country of countriesArry) {
        let countryName = document.createElement("div");
        let cName = document.createElement("p");

        countryName.setAttribute("class", "country-container__item");
        cName.textContent = country;

        countryName.append(cName);
        countryContainer.appendChild(countryName);
    }
};
getCountryName(countriesArry);
// ==== Search result in numbers ======

// ===== Defult input event lisner =====
inputCountryName.addEventListener("input", function (evt) {
    countryContainer.innerHTML = "";
    let inputName = this.value;

    startWithAnyWord = countriesArry.filter(country =>
        country.startsWith(inputName)
    );
    getCountryName(startWithAnyWord);

    const searchResultInNum = () => {
        searchInNumbers.innerHTML = "";
        let searchResultInNum = ` ${startWithAnyWord.length}`
        console.log(searchResultInNum)
        searchInNumbers.append(searchResultInNum)
    }
    console.log(searchResultInNum())

});

// ========== StartWithWord ==========
startingWord.addEventListener('click', function () {
    searchWithWord.style.background = '#ffffff'
    searchWithWord.style.color = '#1B2430'
    searchWithWord.style.border = '1px solid #1B2430'
    startingWord.style.background = '#1B2430'
    startingWord.style.color = '#ffffff'
    btnSort.style.background = '#ffffff'
    btnSort.style.color = '#1B2430'
    btnSort.style.border = '1px solid #1B2430'

    inputCountryName.addEventListener("input", function (evt) {
        countryContainer.innerHTML = "";
        let inputName = this.value;
        const startWithAnyWord = countriesArry.filter(country =>
            country.startsWith(inputName)
        );
        getCountryName(startWithAnyWord);
    });
})

// ======== SearchWithWord ==========
searchWithWord.addEventListener('click', function () {
    startingWord.style.background = '#ffffff'
    startingWord.style.color = '#1B2430'
    startingWord.style.border = '1px solid #1B2430'
    searchWithWord.style.background = '#1B2430'
    searchWithWord.style.color = '#ffffff'

    btnSort.style.background = '#ffffff'
    btnSort.style.color = '#1B2430'
    btnSort.style.border = '1px solid #1B2430'

    inputCountryName.addEventListener("input", function (evt) {
        countryContainer.innerHTML = "";
        let inputName = this.value;
        serchWord = countriesArry.filter(country =>
            country.includes(inputName)
        );
        getCountryName(serchWord);
    });
})

// =========== Reverse =============
btnSort.addEventListener("click", function () {
    searchWithWord.style.background = '#ffffff'
    searchWithWord.style.color = '#1B2430'
    searchWithWord.style.border = '1px solid #1B2430'
    startingWord.style.background = '#ffffff'
    startingWord.style.color = '#1B2430'
    startingWord.style.border = '1px solid #1B2430'
    btnSort.style.background = '#1B2430'
    btnSort.style.color = '#ffffff'

    countryContainer.innerHTML = "";
    getCountryName(countriesArry.reverse());
});

// Filter, includes, match, flag