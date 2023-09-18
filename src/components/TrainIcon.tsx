import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Train.svg';

const TrainIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TrainIcon };
