
'use strict';


module.exports = function() {
  return function(str, options) {
    return str.split(/\s+/).length;
  };
};

