import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hat.svg';

const HatIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HatIcon };
