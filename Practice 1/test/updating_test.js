//mocha is a testing framework to test connection with the database and CRUD operations

const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Updating records", function () {
  //here we create the test for saving the database
  var char;

  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario",
      weight: 50,
    });
    char.save().then(function () {
      done();
    });
  });

  it("Update one record in the database", function (done) {
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "luigi" }).then(
      function () {
        MarioChar.findOne({ _id: char._id }).then(function (result) {
          assert(result.name === "luigi");
          done();
        });
      }
    );
  });

  it("increment the weight by 1", function (done) {
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function () {
      MarioChar.findOne({ name: "Mario" }).then(function (record) {
        assert(record.weight === 51);
        done();
      });
    });
  });
});
