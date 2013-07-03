// static strings and values for application
define({
  // static extension config section
  config : {
    localStoreConfigName: 'config',
    defaultConfig: {
      // some string option
      name: "Name",

      // some bool option
      boolOption: true,

      // some array option
      hostsList: {
        "www.google.com" : true,
        "www.nasa.gov": true,
        "www.youtube.com" : true,
        "www.yandex.com" : true
      }
    }
  },

  // routes consts for angular application
  routes: {
    options: "/options",
    welcome: "/welcome",
    popup: "/popup"
  },

  // options page url
  optionsPageUrl: "/html/application.html#/options"

});
