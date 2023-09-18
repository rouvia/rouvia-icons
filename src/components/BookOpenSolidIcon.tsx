import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/book-open_solid.svg';

const BookOpenSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookOpenSolidIcon };
