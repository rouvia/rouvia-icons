import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/smartphone.svg';

const SmartphoneIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmartphoneIcon };
