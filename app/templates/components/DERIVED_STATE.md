# Mike's Guide to Derived State

definition: anything that gets values from other state
- a spreadsheet cell "= A1 + B2"
- "fullName = firstName + lastName"
- "fullName.toLowerCase()"

## Q1: Do you benefit from laziness

#### NO
```js
Ember.Object.extend({
  init() {
    this._super(...arguments);
    this.set('fullName', this.get('firstName') + ' ' + this.get('lastName'));
  }
});
```

#### YES
 (continue to Q2)

## Q2: Do you benefit from live updates?

### NO (with caching)
```js
Ember.Object.extend({
  _fullNameValue: undefined,
  get fullName() {
    if (this._fullNameValue === void 0) {
      this._fullNameValue = this.get('firstName') + ' ' + this.get('lastName');
    }
    return this._fullNameValue;
  }
});
```

## YES
```js
Ember.Object.extend({
  get fullName() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }
});
```


## Q3: Do you benefit from caching?

```js
Ember.Object.extend({
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }
});
```
