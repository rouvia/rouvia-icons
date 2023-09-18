import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-sad.svg';

const MoodSadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodSadIcon };
