import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/small-caret-down.svg';

const SmallCaretDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmallCaretDownIcon };
