import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thumb-down.svg';

const ThumbDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThumbDownIcon };
