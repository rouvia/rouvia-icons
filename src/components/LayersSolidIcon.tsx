import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/layers_solid.svg';

const LayersSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LayersSolidIcon };
