import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud.svg';

const CloudIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudIcon };
