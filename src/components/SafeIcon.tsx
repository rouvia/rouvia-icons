import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/safe.svg';

const SafeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SafeIcon };
