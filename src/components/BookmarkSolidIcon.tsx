import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bookmark_solid.svg';

const BookmarkSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookmarkSolidIcon };
