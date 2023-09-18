import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sort-down.svg';

const SortDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SortDownIcon };
