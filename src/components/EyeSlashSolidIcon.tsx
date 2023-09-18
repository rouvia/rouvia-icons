import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/eye-slash_solid.svg';

const EyeSlashSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EyeSlashSolidIcon };
