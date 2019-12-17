import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const DataIntegrations = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 24 30">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M22 21.3c-2.3 1.8-5.7 2.7-10 2.7s-7.7-.9-10-2.7V24c0 1.1 1 2 2.9 2.8A18.83 18.83 0 0012 28a18.83 18.83 0 007.1-1.2C21 26 22 25.1 22 24zm0-6c-2.3 1.8-5.7 2.7-10 2.7s-7.7-.9-10-2.7V18c0 1.1 1 2 2.9 2.8A18.83 18.83 0 0012 22a18.83 18.83 0 007.1-1.2C21 20 22 19.1 22 18zm0-6c-2.3 1.8-5.7 2.7-10 2.7s-7.7-.9-10-2.7V12c0 1.1 1 2 2.9 2.8A18.83 18.83 0 0012 16a18.83 18.83 0 007.1-1.2C21 14 22 13.1 22 12zM22 6c0-1.1-1-2-2.9-2.8A18.83 18.83 0 0012 2a18.83 18.83 0 00-7.1 1.2C3 4 2 4.9 2 6s1 2 2.9 2.8A18.83 18.83 0 0012 10a18.83 18.83 0 007.1-1.2C21 8 22 7.1 22 6zm2 19.1c-.5 1.4-1.8 2.6-4.1 3.5A21.42 21.42 0 0112 30a21.42 21.42 0 01-7.9-1.4C1.8 27.7.4 26.5 0 25.1V6c0-1.7 1.2-3.1 3.5-4.2A18.41 18.41 0 0112 0a19.8 19.8 0 018.5 1.7C22.8 2.9 24 4.3 24 6z"
        data-name="Fill-1"
      />
    </svg>
  );
};

Icons.set('data-integrations', DataIntegrations);
