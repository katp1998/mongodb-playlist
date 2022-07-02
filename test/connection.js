const mongoose = require("mongoose");

//connect to the database before test runs
before(function (done) {
  //connecting to mongodb, here you are creating a instance for testaroo
  mongoose.connect("mongodb://localhost/testaroo");
  mongoose.connection
    .once("open", function () {
      console.log("Connection successful");
      done();
    })
    .on("error", function (error) {
      console.log("Connection unsuccessful", error);
    });
});

//drop the characters collection before each test
beforeEach(function (done) {
  //drop the collection
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});
