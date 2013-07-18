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
  var log = new logging(false, "backgroundHandler");
  return {

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
      log.LogFromContent(args.msg);
      sendResponse({});
    }
  };
});
