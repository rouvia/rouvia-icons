import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/book_solid.svg';

const BookSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookSolidIcon };
