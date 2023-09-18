import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/repeat.svg';

const RepeatIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { RepeatIcon };
