import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/camera_solid.svg';

const CameraSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CameraSolidIcon };
