function sendMessage(number, message) {
  console.log('i am your future: message');
  console.log('i will send message to this number: ', number);
  console.log('i will send this message: ', message);
}

function sendTemplate(number, template, params = {}) {
  console.log('i am your future: template message');
  console.log('i will send message to this number: ', number);
  console.log('i will send this template ', template);
  console.log('with these parmas: ', params);
}

function sendMedia(number, template, params = {}) {
  console.log('i am your future: media message');
  console.log('i will send message to this number: ', number);
  console.log('i will send this template ', template);
  console.log('with these parmas: ', params);
}

module.exports = {
  sendMessage: sendMessage,
  sendTemplate: sendTemplate,
  sendMedia: sendMedia
};