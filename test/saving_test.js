//mocha is a testing framework to test connection with the database and CRUD operations

const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving records", function () {
  //here we create the test for saving the database
  it("Save records to the database", function (done) {
    var char = new MarioChar({
      name: "Mario",
      weight: 5,
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
