import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thumb-up.svg';

const ThumbUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThumbUpIcon };
