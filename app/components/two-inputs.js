import Ember from 'ember';
import upper from '../utils/to-upper';

const { Component } = Ember;

export default Component.extend({
  str: '',
  _upperValue: upper('str')
});
