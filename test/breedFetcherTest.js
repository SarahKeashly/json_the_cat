const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());


      done();
    });
  });

  // In this scenario, we expect the first argument for our callback (err) to be set, and desc to be null.
  it.only('returns a first argument for our callback (err) to be set, and desc to be null', (done) => {

    fetchBreedDescription('labradoodle', (err, desc) => {
      // we expect an error for this scenario
      console.log(err);
      console.log("desc", desc);

      assert.equal(err, "no cat");
      assert.equal(desc, null);

      // const expectedDesc = null

      // // compare returned description
      // assert.equal(expectedDesc, null);


      done();
    });
  });
});
