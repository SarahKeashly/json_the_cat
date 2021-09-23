const request = require("request");


const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      return "ERROR", error;
    }

    const data = JSON.parse(body)[0];

    if (!data) {
      return "There are no cats by that name";
    }

    console.log(data.description);
  });
};

module.exports = { fetchBreedDescription };