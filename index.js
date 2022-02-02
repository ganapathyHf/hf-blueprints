'use strict';

const stringUtil = require('ember-cli-string-utils');
module.exports = {
  description: 'Generates boilerplate for Happyfox addons.',
  locals(options) {
    let entity = { name: 'dummy' };
    let rawName = entity.name;
    let name = stringUtil.dasherize(rawName);
    let namespace = stringUtil.classify(rawName);

    let addonEntity = options.entity;
    let addonRawName = addonEntity.name;
    let addonName = stringUtil.dasherize(addonRawName);
    let addonNamespace = stringUtil.classify(addonRawName);

    return {
      name,
      modulePrefix: name,
      namespace,
      addonName,
      addonNamespace,
      // emberCLIVersion: require('../../package').version,
      // emberSourceVersion: emberSource,
      //emberCLI,
      year: new Date().getFullYear(),
      yarn: options.yarn,
      welcome: options.welcome,
      blueprint: 'addon',
    };
  }
};