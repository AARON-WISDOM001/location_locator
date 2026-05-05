const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(2)} million</p>
        <p class="country__row"><span>🗣</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>(${
          Object.keys(data.currencies)[0]
        }) ${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

async function whereAmI(lat, lng) {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!response.ok) throw new Error("error occured while  getting location data");
    const data = await response.json();
    console.log("data", data)
    console.log(`You are in ${data.city}, ${data.countryName}`);

    const countryName = await fetch(
      `https://restcountries.com/v3.1/name/${data.countryName}`
    );
    if (!countryName.ok) throw new Error("error occured while getting country data");
    const countryData = await countryName.json();
    renderCountry(countryData[0]);

    
    console.log("Full country data:", countryData);


  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
