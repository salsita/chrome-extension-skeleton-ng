define(['staticConfig', 'lib/q'], function(sc, Q) {
  return {
    Get: function() {
      var deferred = Q.defer();
      chrome.storage.sync.get(sc.config.localStoreConfigName, function (obj) {
        console.log('Read config: ', obj);
        deferred.resolve(obj);
      });

      return deferred.promise;
    },
    Set: function(newCfg) {
      //localStorage.setItem(sc.config.localStoreConfigName, JSON.stringify(newCfg));
      var cfgObj = {};
      cfgObj[sc.config.localStoreConfigName] = newCfg;
      chrome.storage.sync.set(cfgObj, function() {
        console.log('Save config: ', cfgObj);
      });
    }
  };
});
