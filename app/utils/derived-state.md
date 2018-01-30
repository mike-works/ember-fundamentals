# Derived State

### 1) Is lazy calculation important?

#### NO

```js
class MyComponent extends EmberComponent {
  constructor() {
    super(..arguments);
    this.set('fullName',
      `${this.get('first')} ${this.get('last')}`
    );
  }
}
```

### 2) Are updates when dependencies change important?

#### NO

```js
class MyComponent extends EmberComponent {
  constructor() {
    super(..arguments);
    this.set('_secret', null);
  }
  get fullName() {
    if (!this.get('_secret')) {
      this.set('_secret',
        `${this.get('first')} ${this.get('last')}`
      );
    }
    return this.get('_secret');
  }
}
```

#### YES

```js
class MyComponent extends EmberComponent {}

MyComponent.prototype.fullName = Ember.computed(
  'firstName',
  'lastName',
  function() {
    if (!this.get('_secret')) {
      this.set('_secret', `${this.get('first')} ${this.get('last')}`);
    }
    return this.get('_secret');
  }
);
```

```js
const MyComponent = EmberComponent.extend({
  fullName: Ember.computed('firstName', 'lastName', function() {
    if (!this.get('_secret')) {
      this.set('_secret', `${this.get('first')} ${this.get('last')}`);
    }
    return this.get('_secret');
  })
});
```
