import Application from 'emberli/app';
import config from 'emberli/config/environment';
import { merge } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default function startApp(attrs?: { [key: string]: string }) {
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
