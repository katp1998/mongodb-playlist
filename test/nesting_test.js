const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Nesting Records", function () {
  beforeEach(function () {
    mongoose.connection.collections.authors.drop(function (done) {
      done();
    });
  });

  it("Creating an author with sub-documents", function (done) {
    var kat = new Author({
      name: "Kethmie Perera",
      books: [{ title: "Story of my life", pages: 400 }],
    });
    kat.save().then(function () {
      Author.findOne({ name: "Kethmie Perera" }).then(function (record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Adds a book to an author", function (done) {
    var kat = new Author({
      name: "Kethmie Perera",
      books: [{ title: "Story of my life", pages: 400 }],
    });
    kat.save().then(function () {
      Author.findOne({ name: "Kethmie Perera" }).then(function (record) {
        //add a book into the book array
        record.books.push({ title: "Kat is falling for ateef", pages: 700 });
        record.save().then(function () {
          Author.findOne({ name: "Kethmie Perera" }).then(function (result) {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
