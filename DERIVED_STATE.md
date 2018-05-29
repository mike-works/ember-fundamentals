# what is derived state

```js
let x = 4;
let y = 19;
let z = x + y; //<-- derived from x and y
```
## questions to ask

1. Is lazy evaluation important?
if NO

```js
  Component.extend({
    init() {
      this._super(...arguments);
      this.set('fullName', 
        this.get('firstName') + ' ' + this.get('lastName')
      );
    }
  })
```

2. Is caching important
YES --> ES5 getter
```js
  Component.extend({
    _fullName: null,
    get fullName() {
      if (_fullName === null) {
        this._fullName = this.get('firstName') + ' ' + this.get('lastName');
      }
      return this._fullName;
    }
  })
```

3. Is automatic updating based on dependencies important

```js

  function foo(...parts) {
    let args = [...parts, function() {
      return parts.join(' ');
    }];
    return Ember.computed(...args)
  }

  Component.extend({
    fullName: foo('firstName', 'lastName')
  })
```