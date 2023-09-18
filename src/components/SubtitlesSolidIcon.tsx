import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/subtitles_solid.svg';

const SubtitlesSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SubtitlesSolidIcon };
