import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/fullscreen-exit.svg';

const FullscreenExitIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FullscreenExitIcon };
