import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud-check.svg';

const CloudCheckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudCheckIcon };
