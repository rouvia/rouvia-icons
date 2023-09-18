import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-left-down.svg';

const ArrowLeftDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowLeftDownIcon };
