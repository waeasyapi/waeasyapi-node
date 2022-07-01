'use strict';
const Promise = require("promise");

const PARAMS_REQUIRED_MSG = '`number` is mandatory';
const TEMPLATE_REQUIRED_MSG = '`template_name` is mandatory';

module.exports = function (api) {
  return {
    createTemplate: function createTemplate(params, callback) {
      if (!params || !Object.keys(params).length) throw new Error(PARAMS_REQUIRED_MSG);
      return api.post({ url: '/template/create', data: params }, callback);
    },

    getTemplates: function getTemplates(callback) {
      return api.get({ url: '/template/list' }, callback);
    },

    deleteTemplate: function deleteTemplate(template, callback) {
      if (!template) throw new Error(TEMPLATE_REQUIRED_MSG);
      return api.delete({ url: '/template/delete/'+template }, callback);
    }
  };
};