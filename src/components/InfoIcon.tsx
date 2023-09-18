import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/info.svg';

const InfoIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { InfoIcon };
