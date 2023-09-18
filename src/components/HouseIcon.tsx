import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/house.svg';

const HouseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HouseIcon };
