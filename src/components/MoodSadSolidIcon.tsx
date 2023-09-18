import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-sad_solid.svg';

const MoodSadSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodSadSolidIcon };
