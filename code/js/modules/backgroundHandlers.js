define(['util/template',
        'configSerializer',
        'logging'
       ],
  function( template,
            configSerializer,
            logging
          ) {


  // Handler prototype:
  // function handle<REQUEST.CMD>(args, sender, sendResponse)
  //
  // See util/messaging.js for more details.
  //
  var log = new logging(false, 'backgroundHandler');
  return {

    // just load without render
    handleLoadHtml: function(args, sender, sendResponse) {
      sendResponse(template.load(args.template));
    },

    handleSetConfig: function(args, sender, sendResponse) {
      configSerializer.Set(args.config)
      .then(function(cfg) {
        sendResponse(cfg);
      });
      return true;
    },

    handleGetConfig: function(args, sender, sendResponse) {
      configSerializer.Get()
      .then(function(cfg) {
        sendResponse(cfg);
      });
      return true;
    },

    handleLogFromContent: function(args, sender, sendResponse) {
      log.LogFromContent(args.msg);
      sendResponse({});
    }
  };
});
