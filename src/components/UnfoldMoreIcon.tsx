import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/unfold-more.svg';

const UnfoldMoreIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UnfoldMoreIcon };
