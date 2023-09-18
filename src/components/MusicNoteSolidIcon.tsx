import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/music-note_solid.svg';

const MusicNoteSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MusicNoteSolidIcon };
