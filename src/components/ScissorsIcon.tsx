import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/scissors.svg';

const ScissorsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ScissorsIcon };
