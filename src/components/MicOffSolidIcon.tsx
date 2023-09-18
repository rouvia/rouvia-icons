import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mic-off_solid.svg';

const MicOffSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MicOffSolidIcon };
