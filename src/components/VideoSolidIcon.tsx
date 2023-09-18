import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/video_solid.svg';

const VideoSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VideoSolidIcon };
