import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sort-up.svg';

const SortUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SortUpIcon };
