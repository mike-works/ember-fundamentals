import Application from '@ember/application';
import Resolver from 'emberli/resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'emberli/config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
