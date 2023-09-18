import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-happy.svg';

const MoodHappyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodHappyIcon };
