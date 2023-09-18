import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/playlist.svg';

const PlaylistIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlaylistIcon };
