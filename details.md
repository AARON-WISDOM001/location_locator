/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=30&longitude. Use the fetch API and promises to get the data.
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API (https://restcountries.com/v2/name/${country}) that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/


# helper function to display country:
# const renderCountry = function (data) {
  const html = `
      <article class="country">
            <img class="country__img" src=${data.flag}
    }/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(2)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
              <p class="country__row"><span>💰</span>(${
                data.currencies[0].code
              }) ${data.currencies[0].name}</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
**/

### * {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: system-ui;
  color: #555;
  background-color: #f7f7f7;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.countries {
  /* margin-bottom: 8rem; */
  display: flex;

  font-size: 2rem;
  opacity: 0;
  transition: opacity 1s;
}

.country {
  background-color: #fff;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  width: 30rem;
  border-radius: 0.7rem;
  margin: 0 3rem;
  /* overflow: hidden; */
}

.neighbour::before {
  content: 'Neighbour country';
  width: 100%;
  position: absolute;
  top: -4rem;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #888;
}

.neighbour {
  transform: scale(0.8) translateY(1rem);
  margin-left: 0;
}

.country__img {
  width: 30rem;
  height: 17rem;
  object-fit: cover;
  background-color: #eee;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
}

.country__data {
  padding: 2.5rem 3.75rem 3rem 3.75rem;
}

.country__name {
  font-size: 2.7rem;
  margin-bottom: 0.7rem;
}

.country__region {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  color: #888;
}

.country__row:not(:last-child) {
  margin-bottom: 1rem;
}

.country__row span {
  display: inline-block;
  margin-right: 2rem;
  font-size: 2.4rem;
}

.btn-country {
  border: none;
  font-size: 2rem;
  padding: 2rem 5rem;
  border-radius: 0.7rem;
  color: white;
  background-color: orangered;
  cursor: pointer;
}

.images {
  display: flex;
}

.images img {
  display: block;
  width: 80rem;
  margin: 4rem;
}

.images img.parallel {
  width: 40rem;
  margin: 2rem;
  border: 3rem solid white;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
}
