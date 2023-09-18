import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/caret-down.svg';

const CaretDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CaretDownIcon };
