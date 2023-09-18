import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/play.svg';

const PlayIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlayIcon };
