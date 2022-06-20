'use strict';
const Promise = require("promise");

const NUMBER_REQUIRED_MSG = '`number` is mandatory';
const MESSAGE_REQUIRED_MSG = '`message` is mandatory';
const TEMPLATE_REQUIRED_MSG = '`template` is mandatory';

module.exports = function (api) {
  return {
    sendMessage: function sendMessage(number, message, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!message) throw new Error(MESSAGE_REQUIRED_MSG);

      const payload = {
        number: number,
        message: message
      };

      return api.post({
        url: '/send/message',
        data: payload
      }, callback);
    },
    sendTemplate: function sendTemplate(number, template, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!template) throw new Error(TEMPLATE_REQUIRED_MSG);

      const payload = {
        number: number,
        template: template,
        params: params
      };

      return api.post({
        url: '/send/template',
        data: payload
      }, callback);
    },
    sendMedia: function sendTemplate(number, template, media, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!template) throw new Error(TEMPLATE_REQUIRED_MSG);

      const payload = {
        number: number,
        template: template,
        media: media,
        params: params
      };

      return api.post({
        url: '/send/media',
        data: payload
      }, callback);
    },
  };
};