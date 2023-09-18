import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/video-camera.svg';

const VideoCameraIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VideoCameraIcon };
