import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/apps.svg';

const AppsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AppsIcon };
