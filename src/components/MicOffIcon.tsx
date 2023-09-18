import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mic-off.svg';

const MicOffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MicOffIcon };
