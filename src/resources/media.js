'use strict';
const Promise = require("promise");

module.exports = function (api) {
  return {
    getMedia: function getMedia(mediaId, callback) {
      return api.get({ url: '/media/retrieve/'+mediaId }, callback);
    }
  };
};