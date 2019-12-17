import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const Product = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32 32">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M15 23.5h2v-10h-2zm2.2-13.8a1.1 1.1 0 11-1.9-.8 1.23 1.23 0 01.8-.4.91.91 0 01.8.4 1.14 1.14 0 01.3.8zM30 16a13.51 13.51 0 00-4.1-9.9A13.51 13.51 0 0016 2a13.51 13.51 0 00-9.9 4.1A13.51 13.51 0 002 16a13.51 13.51 0 004.1 9.9A13.51 13.51 0 0016 30a13.51 13.51 0 009.9-4.1A13.51 13.51 0 0030 16zm2 0a15.48 15.48 0 01-4.7 11.3A15.48 15.48 0 0116 32a15.48 15.48 0 01-11.3-4.7A15.48 15.48 0 010 16 15.48 15.48 0 014.7 4.7 15.48 15.48 0 0116 0a15.48 15.48 0 0111.3 4.7A15.48 15.48 0 0132 16z"
        data-name="Page-1"
      />
    </svg>
  );
};

Icons.set('product', Product);
