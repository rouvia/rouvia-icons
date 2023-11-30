import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Green.svg';

const GreenIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GreenIcon };
