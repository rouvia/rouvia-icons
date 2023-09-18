import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mood-happy_solid.svg';

const MoodHappySolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoodHappySolidIcon };
