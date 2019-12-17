import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const Twitter = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32 25.99">
      <path
        fill={bgColor}
        d="M32 3.09a13.94 13.94 0 01-3.29 3.39v.85C28.73 16 22.13 26 10.07 26A18.51 18.51 0 010 23.05a13.82 13.82 0 001.58.08 13.14 13.14 0 008.15-2.8 6.58 6.58 0 01-6.14-4.55 8.52 8.52 0 001.24.1 7.07 7.07 0 001.73-.22A6.56 6.56 0 011.3 9.22v-.08a6.55 6.55 0 003 .83 6.58 6.58 0 01-2-8.77 18.64 18.64 0 0013.53 6.86 7.41 7.41 0 01-.17-1.5A6.56 6.56 0 0122.15 0a6.49 6.49 0 014.79 2.08A13.07 13.07 0 0031.11.49a6.56 6.56 0 01-2.89 3.61 13 13 0 003.78-1z"
      />
    </svg>
  );
};

Icons.set('twitter', Twitter);
