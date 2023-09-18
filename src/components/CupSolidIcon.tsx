import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cup_solid.svg';

const CupSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CupSolidIcon };
