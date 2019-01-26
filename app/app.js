import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// Maintain compatibility w/ ember 1.13 -> 3.7.1 and beyond
// https://www.emberjs.com/deprecations/v2.x/#toc_controller-content-alias
Controller.reopen({
  content: alias('model')
});

export default App;
