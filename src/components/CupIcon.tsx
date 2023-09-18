import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cup.svg';

const CupIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CupIcon };
