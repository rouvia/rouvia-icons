import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/plus-box_solid.svg';

const PlusBoxSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlusBoxSolidIcon };
