import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/watch_solid.svg';

const WatchSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { WatchSolidIcon };
