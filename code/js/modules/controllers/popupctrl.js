define(['util/messagingClient', 'logging', 'staticConfig', 'jquery', 'lib/purl'],
  function(client, logging, sc, $, purl) {
  logging.init(true, "popupctrl", client);
  return ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.Cancel = function() {
      window.close();
    };

    // options button handler
    $scope.Options = function() {
      // get current tab
      chrome.tabs.query({currentWindow:true,active:true}, function(tabs) {
        if (!tabs || tabs.length === 0) {
          return;
        }

        var tab = tabs[0];

        // load options page to current tab
        client.sendBroadcast({
          cmd: 'RedirectTab',
          args: {
            tabId: tab.id,
            url: sc.optionsPageUrl
          }
        }, function() {
          window.close();
        });
      });
    };

    // read URL from current tab and init angular page
    var ReadUrlFromCurrentTab = function() {
      logging.debug("ReadUrlFromCurrentTab");
      // get current tab
      chrome.tabs.query({currentWindow:true,active:true}, function(tabs) {
        if (!tabs || tabs.length === 0) {
          return;
        }

        var tab = tabs[0];
        $scope.popup = {};
        var url = $.url(tab.url);

        // get current tab host
        var host = url.attr('host');
        $scope.popup.host = host;
        logging.debug("popup for host=" + host);

        var protocol = url.attr('protocol');
        if (protocol !== "http" &&
            protocol !== "https")
        {
          // can be add only for http and https urls
          $scope.addButtonDisabled = true;
        }
        else {
          $scope.addButtonDisabled = false;
        }

        $scope.$apply();
      });
    };

    ReadUrlFromCurrentTab();

    // add button handler
    $scope.Add = function() {
      client.sendBroadcast({
        cmd: 'GetConfig',
        args: {}
      }, function(config) {
        // change hosts list
        config.hostsList[$scope.popup.host] = true;
        // save config
        client.sendBroadcast({
          cmd: 'SetConfig',
          args: {
            config: config
          }
        }, function() {
            window.close();
        });
      });
    };

    // because this has happened asynchronously we've missed
    // Angular's initial call to $apply after the controller has been loaded
    // hence we need to explicitly call it at the end of our Controller constructor
    $scope.$apply();
  }];
});