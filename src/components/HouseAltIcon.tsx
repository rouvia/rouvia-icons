import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/house-alt.svg';

const HouseAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HouseAltIcon };
