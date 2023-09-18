import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-neutral_solid.svg';

const MoodNeutralSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodNeutralSolidIcon };
