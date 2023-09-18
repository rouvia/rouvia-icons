import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thumb-up_solid.svg';

const ThumbUpSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThumbUpSolidIcon };
