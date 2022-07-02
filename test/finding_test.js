//mocha is a testing framework to test connection with the database and CRUD operations

const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Finding records", function () {
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

  it("Finds one record from the database", function (done) {
    MarioChar.findOne({ name: "Mario" }).then(function (result) {
      assert(result.name === "Mario");
      done();
    });
  });

  it("Finds one record by ID", function (done) {
    MarioChar.findOne({ _id: char._id }).then(function (result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
