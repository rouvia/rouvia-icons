import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/house_solid.svg';

const HouseSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HouseSolidIcon };
