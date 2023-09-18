import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/copy_solid.svg';

const CopySolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CopySolidIcon };
