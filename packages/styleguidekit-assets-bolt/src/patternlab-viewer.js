// require('data-saver');
// require('wolfy87-eventemitter');

import '@pattern-lab/ui-typeahead';
import '@pattern-lab/ui-layout';
import '@pattern-lab/ui-modal-viewer';
import '@pattern-lab/ui-panels';
import '@pattern-lab/ui-panels-util';
import '@pattern-lab/ui-panels-viewer';
import '@pattern-lab/ui-pattern-finder';
import '@pattern-lab/ui-plugin-loader';
import '@pattern-lab/ui-styleguide';
import '@pattern-lab/ui-toggle-layout';
import '@pattern-lab/ui-toggle-theme';
// // require('postmessage');
// require('prism/prism-languages');
// require('url-handler');


//// Add hook to auto re-render the root component.
if (typeof module.hot === 'object') {
  module.hot.accept((err) => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}
