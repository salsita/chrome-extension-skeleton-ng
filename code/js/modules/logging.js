// module for logging
// from options/popup and bg pages to one bg page
define({
  // init log
  init: function(isContentModule, _moduleName, _client) {
    this.isContent = isContentModule;
    this.moduleName = _moduleName;
    this.client = _client;
  },

  // debug log
  debug: function(str) {
    this.log(this.DEBUG, str);
  },

  // info log
  info: function(str) {
    this.log(this.INFO, str);
  },

  // log function
  log: function (priority, str) {

    str =  "[" + priority + "]" + str;

    if (this.moduleName) {
      str = "[" + this.moduleName + "]" + str;
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

  // if it is local content context
  isContent: false,

  // module name
  moduleName: null,

  // client for content script
  client: null
});
