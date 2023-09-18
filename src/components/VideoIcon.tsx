import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/video.svg';

const VideoIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { VideoIcon };
