import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/eye.svg';

const EyeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EyeIcon };
