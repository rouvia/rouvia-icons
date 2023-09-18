import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/eye-slash.svg';

const EyeSlashIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EyeSlashIcon };
