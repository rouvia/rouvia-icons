import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/subtitles.svg';

const SubtitlesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SubtitlesIcon };
