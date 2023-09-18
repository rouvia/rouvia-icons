import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/filter.svg';

const FilterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FilterIcon };
