import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud_solid.svg';

const CloudSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudSolidIcon };
