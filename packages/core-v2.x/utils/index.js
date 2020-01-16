import { name } from 'skatejs/dist/esnext/name.js';

export * from './color-contrast';
export * from './contains-any';
export * from './contains-tag-name';
export * from './convert-schema-to-props';
export * from './css';
export * from './debounce';
export * from './declarative-click-handler';
export * from './environment';
export * from './find-parent-tag';
export * from './get-component-root-element';
export * from './get-transition-duration';
export * from './get-unique-id';
export * from './is-valid-selector';
export * from './rgb2hex';
export * from './rename-key';
export * from './sanitize-classes';
export * from './scrollbar';
export * from './supports-css-vars';
export * from './supports-passive-event-listener';
export * from './which-transition-event';
export * from './wait-for-transition-end';
export * from './watch-for-component-mutations';
export * from './context/define-context';
export * from './context/with-context';
export { mapWithDepth } from './map-with-depth.js';
export * from './validate-props';
export * from './mode';
export * from './query';

// https://www.polymer-project.org/3.0/docs/devguide/custom-elements#defer-work
export {
  beforeNextRender,
  afterNextRender,
} from '@polymer/polymer/lib/utils/render-status.js';

export { shadow, withComponent, props } from 'skatejs/dist/esnext';

// rewrite the original @define decorator to maintain backwards compatibility
function legacyDefine(clazz) {
  window.customElements.define(clazz.is || name(), clazz);
  return clazz;
}

function standardDefine(classOrDescriptor) {
  const { kind, elements } = classOrDescriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      window.customElements.define(clazz.is || name(), clazz);
    },
  };
}

// output the correct decorator syntax depending on the the env being compiled
export function define(classOrDescriptor) {
  if (typeof classOrDescriptor === 'function') {
    return legacyDefine(classOrDescriptor);
  } else {
    return standardDefine(classOrDescriptor);
  }
}