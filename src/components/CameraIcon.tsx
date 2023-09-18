import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/camera.svg';

const CameraIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CameraIcon };
