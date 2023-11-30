import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Volume.svg';

const VolumeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VolumeIcon };
