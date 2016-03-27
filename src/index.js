function objectIterator(obj) {

  const iterableObj = {

    [Symbol.iterator]: function() {
      const keys = Object.keys(this);
      let i = 0;

      return {
        next: () => ({
          value: this[keys[i++]],
          done: i > keys.length
        })
      };
    }

  };

  return Object.assign(iterableObj, obj);
}

module.exports = objectIterator;