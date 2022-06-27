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

Instantiate the waeasyapi instance with `acc_id` & `acc_secret`. You can obtain the keys from the dashboard app ([https://app.waeasyapi.com/](https://app.waeasyapi.com/))

```js
const WAEasyAPI = require('waeasyapi');

const waInstance = new WAEasyAPI({
  acc_id: 'YOUR_ACC_ID',
  acc_secret: 'YOUR_ACC_SECRET',
});
```

Available methods:

```js
// number must start with the country's dialing code

// eg - For USA: 158883993
// eg - For India: 919876543210

// eg - send a text message
const message = 'Hello from WA Easy API';
waInstance.sendTextMessage(number, message);

```

```js
// eg - send an approved WhatsApp template
const template = 'approved_template_name';

// if there are variables in the template
// eg: "Your order {{1}} for a total of {{2}} is confirmed. The expected delivery is {{3}}."
const params = {
  language: {
      code: 'en',
      policy: 'deterministic'
  },
  components: [{
    type: 'body',
    parameters: [
      { type: 'text', text: 'ORDER_ID_199' }, // for {{1}}
      { type: 'text', text: 'USD 199.00' }, // {{2}}
      { type: 'text', text: 'today' } // {{3}}
    ]
  }]
}

// if there are no variables in the template 
// and it's english template, you can keep params = {}

waInstance.sendTemplateMessage(number, template, params);
```

```js
// eg - send a url message with preview
waInstance.sendURLMessage(number, url);

// eg - send an image message via an http / https url
const params = { link: `your_image_link` };
waInstance.sendImageMessage(number, params);

// eg - send an audio message via an http / https url
const params = { link: `your_audio_link` };
waInstance.sendAudioMessage(number, params);

// eg - send a video message via an http / https url
const params = { link: `your_video_link` };
waInstance.sendVideoMessage(number, params);

// eg - send a document message via an http / https url
const params = { link: `your_document_link` };
waInstance.sendDocumentMessage(number, params);
```

```js
// eg - send a location message 
const params = {
  longitude: -122.425332, // required
  latitude: 37.758056, // required
  name: 'Facebook HQ', // optional
  address: "1 Hacker Way, Menlo Park, CA 94025" // optional
};
waInstance.sendLocationMessage(number, params);
```

```js
// eg - send a contact message
const params = [
  {
    formatted_name: 'Robin White', // required
    first_name: 'Robin', // optional
    last_name: 'White', // optional

    phones: [{ 
      phone: '+18787878787', // required
      wa_id: '8787878787' // optional
    }],

    emails: [{ email: 'team@waeasyapi.com' }] // optional
  }
];
waInstance.sendContactMessage(number, params);
```

```js
// eg - send a interactive message 
const params = {
  type: 'list', // type = list OR button
  header: {},
  body: {},
  footer: {},
  action: {}
};
waInstance.sendInteractiveMessage(number, params);
```

Every resource method returns a promise.

```js
waInstance.sendTextMessage(number, message)
  .then(response => {
    // handle success
  })
  .catch(error => {
    // handle error
  });
```

If you want to use callbacks instead of promises, every resource method will accept a callback function as a last parameter. The callback functions will behave as [Error First Callbacks ](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

```js
waInstance.sendTextMessage(number, message),
  (error, response) => {
    if (error) {
      // handle error
    } else {
      // handle success
    }
  }
);
```

#### Example - Node.js

```js
// number must start with the country's dialing code

const WAEasyAPI = require('waeasyapi');

const waInstance = new WAEasyAPI({
  acc_id: 'YOUR_ACC_ID',
  acc_secret: 'YOUR_ACC_SECRET',
});

waInstance.sendTextMessage('19876543210', 'Hello WA Easy API!')
  .then(response => {
    // handle success
  })
  .catch(error => {
    // handle error
  });
```

#### Example - Typescript or ESNext

```js
// number must start with the country's dialing code

import WAEasyAPI from 'waeasyapi';

const waInstance = new WAEasyAPI({
  acc_id: 'YOUR_ACC_ID',
  acc_secret: 'YOUR_ACC_SECRET',
});

waInstance.sendTextMessage('19876543210', 'Hello WA Easy API!'),
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
