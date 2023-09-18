import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/playlist-video.svg';

const PlaylistVideoIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlaylistVideoIcon };
