import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/search.svg';

const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SearchIcon };
