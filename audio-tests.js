// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by audio.js.
import { name as packageName } from "meteor/drwmtek:audio";

// Write your tests here!
// Here is an example.
Tinytest.add('audio - example', function (test) {
  test.equal(packageName, "audio");
});
