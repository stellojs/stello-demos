
'use strict';

module.exports = function() {
  return function(str, options) {
    var lines = str.split('\n')
      , ret = ''
      , maxLen = 100;
    lines.forEach(function(l) {
      if(ret.length > maxLen) { return ; }
      l = l.trim();
      if(l.charAt(0) === '#') { return; }
      ret += ' ' + l;
    });
    return ret.substr(0, maxLen-1) + '...';
  };
};


