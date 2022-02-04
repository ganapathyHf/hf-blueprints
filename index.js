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
      yarn: options.yarn,
      welcome: options.welcome,
      blueprint: 'addon'
    };
  },
  mapFile() {
    let result = this._super.mapFile.apply(this, arguments);
    if (result === 'npmignore') {
      return '.npmignore';
    }
    return result;
  },
};