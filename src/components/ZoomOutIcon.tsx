import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/zoom-out.svg';

const ZoomOutIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ZoomOutIcon };
