'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = require('./api');
var pkg = require('../package.json');

var WAEasyAPI = function () {
  _createClass(WAEasyAPI, null);

  function WAEasyAPI() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WAEasyAPI);

    var acc_id = options.acc_id,
    acc_secret = options.acc_secret,
        headers = options.headers;

    
    console.log('acc_id: ', acc_id);
    console.log('acc_secret: ', acc_secret);

    if (!acc_id) throw new Error('`acc_id` is mandatory');
    if (!acc_secret) throw new Error('`acc_secret` is mandatory');

    this.acc_id = acc_id;
    this.key_secret = key_secret;

    this.api = new API({
      hostUrl: 'https://api.waeasyapi.com/v1/',
      ua: 'waeasyapi-node@' + WAEasyAPI.VERSION,
      acc_id: acc_id,
      acc_secret: acc_secret,
      headers: headers
    });
    this.addResources();
  }

  _createClass(WAEasyAPI, [{
    key: 'addResources',
    value: function addResources() {
      Object.assign(this, require('./resources/messages.js')(this.api));
    }
  }]);

  return WAEasyAPI;
}();

WAEasyAPI.VERSION = pkg.version;

module.exports = WAEasyAPI;