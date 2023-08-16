const path = require('path')
const async = require('async')
const newman = require('newman')

const PARALLEL_RUN_COUNT = 1



const parametersForTestRun = {
    collection: path.join(__dirname, 'postman/'), // your collection
    reporters: 'cli'
};
const parametersForTestRun1 = {
    collection: path.join(__dirname, 'postman/'), // your collection
    reporters: 'cli'
};
const parametersForTestRun2 = {
    collection: path.join(__dirname, 'postman/'), // your collection
    reporters: 'cli'
};
const parametersForTestRun3 = {
    collection: path.join(__dirname, 'postman/'), // your collection
    reporters: 'cli'
};
const parametersForTestRun4 = {
    collection: path.join(__dirname, 'postman/'), // your collection
    reporters: 'cli'
};

parallelCollectionRun = function (done) {
    newman.run(parametersForTestRun, done);
};
parallelCollectionRun1 = function (done) {
    newman.run(parametersForTestRun1, done);
};
parallelCollectionRun2 = function (done) {
    newman.run(parametersForTestRun2, done);
};
parallelCollectionRun3 = function (done) {
    newman.run(parametersForTestRun3, done);
};
parallelCollectionRun4 = function (done) {
    newman.run(parametersForTestRun4, done);
};

async.parallel([
    parallelCollectionRun,
    parallelCollectionRun1,
    parallelCollectionRun2,
    parallelCollectionRun3,
    parallelCollectionRun4
  ],
  function(err, results) {
    err && console.error(err);

    results.forEach(function(result) {
      var failures = result.run.failures;
      console.info(failures.length ? JSON.stringify(failures.failures, null, 2) :
        `${result.collection.name} ran successfully.`);
    });
  });