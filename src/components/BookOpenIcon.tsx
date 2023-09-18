import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/book-open.svg';

const BookOpenIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookOpenIcon };
