import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/globe_solid.svg';

const GlobeSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GlobeSolidIcon };
