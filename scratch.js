let o = {
  firstName: 'Mike',
  lastName: 'North'
};

Object.defineProperty(o, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`
  },
  set(newVal) {
    let [first, last] = newVal.split(/\s+/);
    this.firstName = first;
    this.lastName = last;
  }
})

console.log('BEFORE', o.fullName);
o.fullName = 'M N.';
console.log('AFTER', o.fullName);