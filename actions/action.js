"use strict";
let datafire = require('datafire');

let google_firebaseremoteconfig = require('@datafire/google_firebaseremoteconfig').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let remoteConfig = await Promise.all([].map(item => google_firebaseremoteconfig.projects.getRemoteConfig({
      project: "",
    }, context)));
    return remoteConfig;
  },
});
