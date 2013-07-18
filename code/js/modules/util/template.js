define(['jquery'], function($) {

  // template html cache
  var _cache = {};

  return {
    // template loading (synchronous)
    load: function(name) {
      var target = '/html/templates/' + name + '.html';
      if (!(target in _cache)) {
        $.ajax({
          url: chrome.extension.getURL(target),
          type: 'GET',
          async: false,
          cache: false,
          success: function(html) {
            _cache[target] = html;
          },
          error: function() {
            console.error('cannot load template "' + name + '"');
          }
        });
      }
      return _cache[target];
    }
  };

});
