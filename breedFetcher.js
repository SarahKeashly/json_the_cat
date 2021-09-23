const request = require("request");
const argv = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${argv}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log("ERROR", error);
  }

  const data = JSON.parse(body)[0];

  if (!data) {
    return console.log(`There are no cats by the name of ${argv}`)
  }

  console.log(data.description);
});
