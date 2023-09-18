import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/house-alt_solid.svg';

const HouseAltSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HouseAltSolidIcon };
