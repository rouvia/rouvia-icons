import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/layers.svg';

const LayersIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LayersIcon };
