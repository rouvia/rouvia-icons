import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/pause.svg';

const PauseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PauseIcon };
