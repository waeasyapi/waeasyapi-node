# WA Easy API Node SDK

[![npm](https://img.shields.io/npm/v/waeasyapi.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/waeasyapi)

Official nodejs library for [WA Easy API](https://waeasyapi.com/).

Read up here for getting started and understanding messages flow with WA Easy API: <https://docs.waeasyapi.com/>

## Installation

```bash
npm i waeasyapi
```

## Documentation

Documentation of WA Easy API's API and their usage is available at <https://docs.waeasyapi.com>

### Basic Usage

Instantiate the waeasyapi instance with `accId` & `accSecret`. You can obtain the keys from the dashboard app ([https://app.waeasyapi.com/](https://app.waeasyapi.com/))

```js
const WAEasyAPI = require('waeasyapi');

var waInstance = new WAEasyAPI({
  accId: 'YOUR_ACC_ID',
  accSecret: 'YOUR_ACC_SECRET',
});
```

Available methods:

```js
// example - send a text message
waInstance.sendMessage(number, message);

// example - send an approved WhatsApp template
waInstance.sendTemplate(number, template, params);

// example - send an approved WhatsApp media template
waInstance.sendMedia(number, template, params);
```

Every resource method returns a promise.

```js
waInstance.sendMessage(number, message)
  .then(response => {
    // handle success
  })
  .catch(error => {
    // handle error
  });
```

If you want to use callbacks instead of promises, every resource method will accept a callback function as a last parameter. The callback functions will behave as [Error First Callbacks ](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

```js
waInstance.sendMessage(number, message),
  (error, response) => {
    if (error) {
      // handle error
    } else {
      // handle success
    }
  }
);
```

## Licence

MIT Licensed. See [LICENSE.txt](LICENSE.txt) for more details
