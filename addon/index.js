'use strict';
// const latestVersion = require('latest-version');
// const stringUtil = require('ember-cli-string-utils');
// const getChannelURL = require('ember-source-channel-url');
module.exports = {
  description: 'Generates an Ember Octane addon.',
  name: 'addon',

  filesToRemove: ['travis.yml'],
  // locals(options) {
  //   return Promise.all([
  //     latestVersion('ember-cli', {version: 'beta'}),
  //     getChannelURL('beta')
  //   ]).then(([emberCLI, emberSource]) => {
  //     let entity = { name: 'dummy' };
  //     let rawName = entity.name;
  //     let name = stringUtil.dasherize(rawName);
  //     let namespace = stringUtil.classify(rawName);

  //     let addonEntity = options.entity;
  //     let addonRawName = addonEntity.name;
  //     let addonName = stringUtil.dasherize(addonRawName);
  //     let addonNamespace = stringUtil.classify(addonRawName);

  //     return {
  //       name,
  //       modulePrefix: name,
  //       namespace,
  //       addonName,
  //       addonNamespace,
  //       emberSourceVersion: emberSource,
  //       emberCLI,
  //       year: new Date().getFullYear(),
  //       yarn: options.yarn,
  //       welcome: options.welcome,
  //       blueprint: 'addon',
  //     };
  //   });

  // }
}