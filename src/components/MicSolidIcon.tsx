import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mic_solid.svg';

const MicSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MicSolidIcon };
