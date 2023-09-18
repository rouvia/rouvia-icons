import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/unfold-less.svg';

const UnfoldLessIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UnfoldLessIcon };
