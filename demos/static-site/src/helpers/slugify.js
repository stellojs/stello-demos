
'use strict';

module.exports = function() {
  return function(str, options) {
    return str
      .toLowerCase()
      .trim()
      .replace(/\W/g, '-');
  };
};

