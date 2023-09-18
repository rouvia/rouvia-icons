import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/music-notes_solid.svg';

const MusicNotesSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MusicNotesSolidIcon };
