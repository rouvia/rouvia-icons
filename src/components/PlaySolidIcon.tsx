import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/play_solid.svg';

const PlaySolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlaySolidIcon };
