import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/card.svg';

const CardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CardIcon };
