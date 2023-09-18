import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/tablet_solid.svg';

const TabletSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TabletSolidIcon };
