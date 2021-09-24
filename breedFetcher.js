const request = require("request");


const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);//prints null because there needs to be 2 parameters as per the request library, however nothing needs to print out here
    }

    const data = JSON.parse(body)[0];
    console.log("data", data);
    if (!data) {
      callback("no cat", null);//returns on the first parameter of the callback function

      return;
    }
    console.log("string: hitting null")
    callback(null, data.description); //prints null because there needs to be 2 parameters as per the request library, however nothing needs to print out

    console.log('callback', callback);

  });



};

module.exports = { fetchBreedDescription };