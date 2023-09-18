import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/music-note.svg';

const MusicNoteIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MusicNoteIcon };
