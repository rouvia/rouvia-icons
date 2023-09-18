import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bag-alt_solid.svg';

const BagAltSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BagAltSolidIcon };
