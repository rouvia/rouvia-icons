import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mic.svg';

const MicIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MicIcon };
