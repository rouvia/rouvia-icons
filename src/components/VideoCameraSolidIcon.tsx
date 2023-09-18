import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/video-camera_solid.svg';

const VideoCameraSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VideoCameraSolidIcon };
