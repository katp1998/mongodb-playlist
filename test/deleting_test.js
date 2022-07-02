//mocha is a testing framework to test connection with the database and CRUD operations

const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Deleting records", function () {
  //here we create the test for saving the database
  var char;

  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario",
      weight: 5,
    });
    char.save().then(function () {
      done();
    });
  });

  it("delete one record from the database", function (done) {
    MarioChar.findOneAndRemove({ name: "Mario" }).then(function () {
      MarioChar.findOne({ name: "Mario" }).then(function (result) {
        assert(result === null);
        done();
      });
    });
  });
});
