import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/camera-off_solid.svg';

const CameraOffSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CameraOffSolidIcon };
