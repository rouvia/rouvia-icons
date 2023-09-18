import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/video-camera-off.svg';

const VideoCameraOffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VideoCameraOffIcon };
