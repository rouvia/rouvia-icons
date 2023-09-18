import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/filter_solid.svg';

const FilterSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FilterSolidIcon };
