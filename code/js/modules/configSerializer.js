define(['staticConfig'], function(sc) {
  return {
    Get: function() {
      var cfgStr = localStorage.getItem(sc.config.localStoreConfigName);
      if (cfgStr) {
        var cfgObj = JSON.parse(cfgStr);
        return cfgObj;
      }
      else {
        return sc.config.defaultConfig;
      }
    },
    Set: function(newCfg) {
      localStorage.setItem(sc.config.localStoreConfigName, JSON.stringify(newCfg));
    }
  };
});
