// module for logging
// from options/popup and bg pages to one bg page
define([], function() {
  var log = function(isContentModule, _moduleName, _client) {
    return {
      // debug log
      debug: function(str) {
        this.log(this.DEBUG, str);
      },

      // info log
      info: function(str) {
        this.log(this.INFO, str);
      },

      // error log
      error: function(str) {
        this.log(this.ERROR, str);
      },

      // log function
      log: function (priority, str) {

        str =  '[' + priority + ']' + str;

        if (this.moduleName) {
          str = '[' + this.moduleName + ']' + str;
        }

        if (this.isContent && this.client) {
          // send log to bg page
          this.client.sendBroadcast({
            cmd: 'LogFromContent',
            args: {
              msg: str
            }
          });
        } else {
          // background page
          console.log(str);
        }
      },

      LogFromContent: function(message) {
        console.log(message);
      },

      // log priorities
      DEBUG: 0,
      INFO: 1,
      ERROR: 2,

      // if it is local content context
      isContent: isContentModule,

      // module name
      moduleName: _moduleName,

      // client for content script
      client: _client
    };
  };

  return log;
});
