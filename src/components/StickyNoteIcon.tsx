import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sticky-note.svg';

const StickyNoteIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StickyNoteIcon };
