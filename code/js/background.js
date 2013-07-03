// background page for extension
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

  logging.init(true,  "background");

  logging.info('Background script (background.js):');

  logging.info('+ jQuery     loaded in version:', $.fn.jquery);
  logging.info('+ underscore loaded in version:', _.VERSION);

  var config = configSerializer.Get();
  logging.info('Configuration: ' + JSON.stringify(config, null, '\t'));

  messaging.backgroundInitialize();
});

// Check whether new version is installed
// this call should stay here due to requirejs async
chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    console.log("This is a first install!");
    chrome.tabs.create({url: "html/application.html#/welcome"});
  } else if(details.reason == "update"){
    console.log("This is a update!");
    console.log(JSON.stringify(details));
    chrome.tabs.create({url: "html/application.html#/options"});
  }
});