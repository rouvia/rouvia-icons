import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/watch.svg';

const WatchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { WatchIcon };
