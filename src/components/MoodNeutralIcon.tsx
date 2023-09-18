import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-neutral.svg';

const MoodNeutralIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodNeutralIcon };
