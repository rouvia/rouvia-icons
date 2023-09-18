import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Chevron-small.svg';

const ChevronSmallIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChevronSmallIcon };
