//
// background page for extension
// this page is invisible, so no any angular here
//
requirejs.config(requireConfig);

requirejs([ 'jquery',
            'underscore',
            'util/messaging',
            'logging',
            'configSerializer',
            'staticConfig'],
function(   $,
            _,
            messaging,
            logging,
            configSerializer,
            sc) {

  var log = new logging(true,  'background');

  log.info('Background script (background.js):');

  log.info('+ jQuery     loaded in version:', $.fn.jquery);
  log.info('+ underscore loaded in version:', _.VERSION);

  configSerializer.Get()
  .then(function(config) {
    log.info('Configuration: ' + JSON.stringify(config, null, '\t'));
  });

  messaging.backgroundInitialize();
});

// Check whether new version is installed
// this call should stay here due to requirejs async
chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == 'install'){
    console.log('This is a first install!');
    chrome.tabs.create({url: 'html/application.html#/welcome'});
  } else if(details.reason == 'update'){
    console.log('This is a update!');
    console.log(JSON.stringify(details));
    chrome.tabs.create({url: 'html/application.html#/options'});
  }
});