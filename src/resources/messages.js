'use strict';
const Promise = require("promise");

const NUMBER_REQUIRED_MSG = '`number` is mandatory';
const MESSAGE_REQUIRED_MSG = '`message` is mandatory';
const TEMPLATE_REQUIRED_MSG = '`template` is mandatory';
const VALID_PARAMS_REQUIRED_MSG = 'valid `params` object is mandatory';
const URL_REQUIRED_MSG = '`url` is mandatory';

module.exports = function (api) {
  return {
    sendTextMessage: function sendTextMessage(number, message, previewURL = false, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!message) throw new Error(MESSAGE_REQUIRED_MSG);

      const payload = { number: number, message: message, previewURL: previewURL };
      return api.post({ url: '/send/message', data: payload }, callback);
    },

    sendURLMessage: function sendURLMessage(number, url, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!url) throw new Error(URL_REQUIRED_MSG);

      const payload = { number: number, url: url };
      return api.post({ url: '/send/url', data: payload }, callback);
    },
    
    sendTemplateMessage: function sendTemplateMessage(number, template, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!template) throw new Error(TEMPLATE_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, template: template, params: params };
      return api.post({ url: '/send/template', data: payload }, callback);
    },

    sendImageMessage: function sendImageMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/image', data: payload }, callback);
    },

    sendAudioMessage: function sendAudioMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/audio', data: payload }, callback);
    },

    sendVideoMessage: function sendVideoMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/video', data: payload }, callback);
    },

    sendDocumentMessage: function sendDocumentMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/document', data: payload }, callback);
    },

    sendContactMessage: function sendContactMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/contact', data: payload }, callback);
    },

    sendLocationMessage: function sendLocationMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/location', data: payload }, callback);
    },

    sendInteractiveMessage: function sendInteractiveMessage(number, params, callback) {
      if (!number) throw new Error(NUMBER_REQUIRED_MSG);
      if (!params || !Object.keys(params)) throw new Error(VALID_PARAMS_REQUIRED_MSG);

      const payload = { number: number, params: params };
      return api.post({ url: '/send/interactive', data: payload }, callback);
    },
  };
};