import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud-check_solid.svg';

const CloudCheckSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudCheckSolidIcon };
