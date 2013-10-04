define(['staticConfig', 'lib/q'], function(sc, Q) {
  return {
    Get: function() {
      var deferred = Q.defer();
      chrome.storage.sync.get(sc.config.localStoreConfigName, function (cfg) {
        if (!cfg) {
          cfg = sc.config;
        }
        deferred.resolve(cfg);
      });

      return deferred.promise;
    },
    Set: function(newCfg) {
      var deferred = Q.defer();

      var cfgObj = {};
      cfgObj[sc.config.localStoreConfigName] = newCfg;
      chrome.storage.sync.set(cfgObj, function() {
        deferred.resolve(newCfg);
      });

      return deferred.promise;
    }
  };
});
