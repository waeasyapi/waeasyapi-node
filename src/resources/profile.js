'use strict';
const Promise = require("promise");

const NUMBER_REQUIRED_MSG = '`number` is mandatory';
const FILE_REQUIRED_MSG = '`photo` binary is mandatory';

module.exports = function (api) {
  return {
    getProfilePhoto: function getProfilePhoto(callback) {
      return api.get({ url: '/profile/photo' }, callback);
    },

    getProfileAbout: function getProfileAbout(callback) {
      return api.get({ url: '/profile/about' }, callback);
    },

    getBusinessProfile: function getBusinessProfile(callback) {
      return api.get({ url: '/profile/business-profile' }, callback);
    },

    deleteProfilePhoto: function deleteProfilePhoto(callback) {
      return api.delete({ url: '/profile/photo' }, callback);
    },
    
    changeProfilePhoto: function changeProfilePhoto(photo, callback) {
      if (!photo) throw new Error(FILE_REQUIRED_MSG);
      const payload = { photo: photo };
      return api.post({ url: '/profile/photo', data: payload }, callback);
    },

    changeProfileAbout: function changeProfileAbout(about, callback) {
      const payload = { about: about };
      return api.post({ url: '/profile/about', data: payload }, callback);
    },

    changeBusinessProfile: function changeBusinessProfile(params, callback) {
      return api.post({ url: '/profile/business-profile', data: params }, callback);
    },
  };
};