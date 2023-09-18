import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/camera-off.svg';

const CameraOffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CameraOffIcon };
