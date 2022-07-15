# WA Easy API Node SDK

[![npm](https://img.shields.io/npm/v/waeasyapi.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/waeasyapi)

Official nodejs library for [WA Easy API](https://waeasyapi.com/).

#### PS: For early access, please write to team@waeasyapi.com.
#### We're trying our best to roll out it asap. Thanks for your patience.

Read up here for getting started and understanding messaging flow: <https://waeasyapi.com/>

## Installation

```bash
npm i waeasyapi
```

## Documentation

Documentation of WA Easy API's API and their usage is available at <https://waeasyapi.com>

### Basic Usage

Instantiate the waeasyapi instance with `acc_id` & `acc_secret`.

You can obtain the keys from the dashboard app ([https://waeasyapi.com/](https://waeasyapi.com/)).

```js
const WAEasyAPI = require('waeasyapi');

const waInstance = new WAEasyAPI({
  acc_id: 'YOUR_ACC_ID',
  acc_secret: 'YOUR_ACC_SECRET',
});
```

Available methods (messaging):

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
// and it's english template, you can keep params = {} or leave it

waInstance.sendTemplateMessage(number, template, params);
```

```js
// eg - send a url message with preview
waInstance.sendURLMessage(number, url);

// eg - send an audio message via a http / https url
const params = { link: `your_audio_link` }; // or id: 'uploaded_media_id' - required
waInstance.sendAudioMessage(number, params);

// eg - send an image message via a http / https url
const params = { 
  link: `your_image_link`, // or id: 'uploaded_media_id' - required
  caption: `your_image_caption` // optional
};
waInstance.sendImageMessage(number, params);

// eg - send a video message via a http / https url
const params = { 
  link: `your_video_link`, // or id: 'uploaded_media_id' - required
  caption: `your_video_caption` // optional
};
waInstance.sendVideoMessage(number, params);

// eg - send a document message via a http / https url
const params = { 
  link: `your_document_link`, // or id: 'uploaded_media_id' - required
  filename: `your_document_name` // optional
};
waInstance.sendDocumentMessage(number, params);

// eg - send a sticker message via a http / https url
const params = { 
  id: `uploaded_media_id`, // required - must be uploaded before sending
};
waInstance.sendStickerMessage(number, params);
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
    name: {
      formatted_name: 'Robin White', // required
      first_name: 'Robin', // optional
      last_name: 'White', // optional
    },

    phones: [{ 
      phone: '+18787878787', // required
      wa_id: '18787878787' // optional
    }],

    emails: [{ email: 'team@waeasyapi.com' }] // optional
  }
];
waInstance.sendContactMessage(number, params);
```

```js
// eg - send an interactive message 
// const params = {
//   type: 'list', // type = list OR button
//   header: {},
//   body: {},
//   footer: {},
//   action: {}
// };

const params = {
  type: 'list',
  header: {
    type: 'text',
    text: 'WA Easy API - Get Started'
  },
  body: {
    text: "WA Easy API is an official WhatsApp Business API and Messagin Platform."
  },
  footer: {
    text: "Thanks for choosing us."
  },
  action: {
    button: "Continue",
    sections:[
      {
        rows: [
          {
            id: "waeasyapi-basic-monthly",
            title: "WA Easy API - Basic I",
            description: "Best for developers ($49/monthly)",           
          },
          {
            id: "waeasyapi-premium-monthly",
            title: "WA Easy API - Premium I",
            description: "Best for developers and businesses both ($99/monthly)",           
          },
          {
            id: "waeasyapi-basic-yearly",
            title: "WA Easy API - Basic II",
            description: "Best for developers ($499/yearly)",           
          },
          {
            id: "waeasyapi-premium-yearly",
            title: "WA Easy API - Premium II",
            description: "Best for developers and businesses both ($899/yearly)",           
          }
        ]
      }
    ]
  }
};
waInstance.sendInteractiveMessage(number, params);

```

Available methods (media):

```js

// eg - get your uploaded media
waInstance.getMedia(mediaId);

// eg - upload your media
// send a post (`multipart/form-data`) request with the media on `file` key to
// basic auth is acceptable with acc_id as username & acc_secret as password
// https://api.waeasyapi.com/v1/media/upload

// acceptable content types

// audio - audio/aac, audio/mp4, audio/amr, audio/mpeg, audio/ogg; codecs=opus 
// Note: The base audio/ogg type is not supported.

// document - Any valid MIME-type.

// image - image/jpeg, image/png

// sticker - image/webp

// video - video/mp4, video/3gpp
// Note: Only H.264 video codec and AAC audio codec is supported. 
// Note: Only videos with a single audio stream are supported.

```

Available methods (profile):

```js

// eg - get your profile photo
waInstance.getProfilePhoto();

// eg - get your profile about
waInstance.getProfileAbout();

// eg - get your business profile
waInstance.getBusinessProfile();

// eg - delete your business photo
waInstance.deleteProfilePhoto();

// eg - change your profile photo
// photo = base64 string of image
waInstance.changeProfilePhoto(photo);

// eg - change your profile about
const about = 'Hey! I\'m using WA Easy API!';
waInstance.changeProfileAbout(about);

// eg - change your business profile
const params = {
  description: 'Official WhatsApp Business APIs & Messaging Platform',
  vertical: 'Professional Services',
  address: 'California, USA',
  email: 'team@waeasyapi.com',
  websites: ['https://waeasyapi.com']
}
waInstance.changeBusinessProfile(params);

// acceptable business verticals are
// const verticals = [
//   'Automotive',
//   'Beauty, Spa and Salon',
//   'Clothing and Apparel',
//   'Education',
//   'Entertainment',
//   'Event Planning and Service',
//   'Finance and Banking',
//   'Food and Grocery',
//   'Public Service',
//   'Hotel and Lodging',
//   'Medical and Health',
//   'Non-profit',
//   'Professional Services',
//   'Shopping and Retail',
//   'Travel and Transportation',
//   'Restaurant',
//   'Other'
// ]

```

Available methods (template):

```js

// eg - create and submit a WhatsApp template message
const params = {
  name: 'template_name',
  category: 'OTP',
  language: 'en',
  components: [
    { type: 'HEADER', format: 'TEXT', text: 'I am header.' },  // format = TEXT | IMAGE | VIDEO | DOCUMENT
    { type: 'BODY', text: 'I am body.' },
    { type: 'FOOTER', text: 'I am footer.' },
    { 
      type: 'BUTTONS', 
      buttons: [ // for quick reply buttons, type = QUICK_REPLY
        { type: 'PHONE_NUMBER', text: 'Call Us', phone_number: '+18887777877' },
        { type: 'URL', text: 'Visit Website', url: 'https://waeasyapi.com' },
      ]
    },
  ]
}
waInstance.createTemplate(params);

// eg - delete a template 
// (note: your might not be able to delete sample templates)

// templateName = name_of_the_template
waInstance.deleteTemplate(templateName);

// eg - get the list of your templates or sync with facebook
waInstance.getTemplates();

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
