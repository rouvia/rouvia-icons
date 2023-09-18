import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/desktop_solid.svg';

const DesktopSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DesktopSolidIcon };
