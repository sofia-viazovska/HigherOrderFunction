'use strict';

const iterate = (obj, callback) => {
  const res = Object.keys(obj);
  for (const key of res) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

module.exports = { iterate };
