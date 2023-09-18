import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/tablet.svg';

const TabletIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TabletIcon };
