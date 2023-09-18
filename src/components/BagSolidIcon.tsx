import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bag_solid.svg';

const BagSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BagSolidIcon };
