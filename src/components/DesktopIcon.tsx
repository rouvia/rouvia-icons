import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/desktop.svg';

const DesktopIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DesktopIcon };
