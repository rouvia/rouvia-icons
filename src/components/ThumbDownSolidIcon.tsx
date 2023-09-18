import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thumb-down_solid.svg';

const ThumbDownSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThumbDownSolidIcon };
