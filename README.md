[![npm version](https://badge.fury.io/js/object-iterable.svg)](https://www.npmjs.com/package/object-iterable)
[![Dependency Status](https://david-dm.org/evturn/object-iterable.svg)](https://www.npmjs.com/package/object-iterable)

## Object Iterable

Create a new object containing the same properties (through assignment) of another object along with an @@iterator method can make use of the default iteration behavior (such as for-of) that built-in iterables like Array or Map have.

```bash
npm install --save object-iterable
```

### Let's see an example

```javascript
const larry = {
  name: 'Larry Johnson',
  alias: 'Grandmama',
  position: [
    'Power Forward',
    'Small Forward'
  ],
  weight: 250,
  height: {
    feet: 6,
    inches: 6
  },
  college: 'UNLV',
  draft: {
    team: 'Charlotte Hornets',
    year: 1991,
    pick: 1
  }
};

for (let val of larry) {
  console.log(val);
}
// Uncaught TypeError: larry[Symbol.iterator] is not a function
```
Oh nos!

But we can get through this.

Here an iterable __new__ object is returned with all the same properties (which after use can optionally be kept or discarded).

```javascript
import iterable from 'object-iterable';

const iterableLarry = iterable(larry);

for (let val of iterableLarry) {
  console.log(val);
}
// Larry Johnson
// Grandmama
// ["Power Forward","Small Forward"]
// 250
// {"feet":6,"inches":6}
// UNLV
// {"team":"Charlotte Hornets","year":1991,"pick":1}

console.log(larry === iterableLarry);
// false
```
