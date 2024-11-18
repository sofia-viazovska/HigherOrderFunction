'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    const type = types[i];
    const name = type.name.toLowerCase();
    if (typeof a !== name) {
      throw new TypeError(`Argument type ${name} expected`);
    }
  }
  const res = fn(...args);
  const type = types[types.length - 1];
  const name = type.name.toLowerCase();
  if (typeof res !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }
  return res;
};

module.exports = { contract };
