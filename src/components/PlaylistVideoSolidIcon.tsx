import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/playlist-video_solid.svg';

const PlaylistVideoSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlaylistVideoSolidIcon };
