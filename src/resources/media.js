'use strict';
const Promise = require("promise");

module.exports = function (api) {
  return {
    getMedia: function getMedia(mediaId, callback) {
      return api.get({ url: '/media/'+mediaId }, callback);
    },

    uploadMedia: function uploadMedia(binaryData, contentType, callback) {
      const payload = { fileContent: binaryData, contentType: contentType };
      return api.post({ url: '/media/upload', data: payload }, callback);
    },
  };
};