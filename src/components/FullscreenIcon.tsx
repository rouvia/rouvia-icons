import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/fullscreen.svg';

const FullscreenIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FullscreenIcon };
