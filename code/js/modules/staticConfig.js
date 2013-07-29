//
// static strings and values for application
// extension config consts of two parts:
//  - static config (some strings, consts) which never changed
//  - dynamic config, which will be storied in localStorage
//
define({

  // static extension config section
  config : {
    // name for store config string in extension localStorage
    localStoreConfigName: 'config',

    // default config, which will be assigned for first run
    defaultConfig: {
      // some bool option
      boolOption: true
    }
  },

  // routes consts for angular application
  routes: {
    options: '/options',
    welcome: '/welcome',
    popup: '/popup'
  }
});
