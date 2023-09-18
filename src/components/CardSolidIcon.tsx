import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/card_solid.svg';

const CardSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CardSolidIcon };
