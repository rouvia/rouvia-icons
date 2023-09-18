import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/book.svg';

const BookIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookIcon };
