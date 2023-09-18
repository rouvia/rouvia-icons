import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/music-notes.svg';

const MusicNotesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MusicNotesIcon };
