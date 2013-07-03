define(['util/template',
        'configSerializer',
        'logging',
        'staticConfig'
       ],
  function( template,
            configSerializer,
            logging,
            sc
          ) {


  // Handler prototype:
  // function handle<REQUEST.CMD>(args, sender, sendResponse)
  //
  // See util/messaging.js for more details.
  //
  logging.init(false, "backgroundHandler");

  return {

    handleGetHtml: function(args, sender, sendResponse) {
      sendResponse(template.compileFromFile(args.template, args.data));
    },

    // just load without render
    handleLoadHtml: function(args, sender, sendResponse) {
      sendResponse(template.load(args.template));
    },

    handleSetConfig: function(args, sender, sendResponse) {
      configSerializer.Set(args.config);
      sendResponse(args.config);
    },

    handleGetConfig: function(args, sender, sendResponse) {
      var cfgObj = configSerializer.Get();
      sendResponse(cfgObj);
    },

    handleLogFromContent: function(args, sender, sendResponse) {
      logging.LogFromContent(args.msg);
      sendResponse({});
    },

    handleRedirectTab: function(args, sender, sendResponse) {
      // TODO it in external module
      logging.debug("RedirectTab to url=" + args.url);
      chrome.tabs.update(args.tabId, {url: args.url});
      sendResponse({});
    }
  };
});
