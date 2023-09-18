import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/unfold-small.svg';

const UnfoldSmallIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UnfoldSmallIcon };
