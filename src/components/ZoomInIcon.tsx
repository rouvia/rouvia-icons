import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/zoom-in.svg';

const ZoomInIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ZoomInIcon };
