import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud-slash.svg';

const CloudSlashIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudSlashIcon };
