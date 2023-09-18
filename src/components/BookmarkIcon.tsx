import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bookmark.svg';

const BookmarkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BookmarkIcon };
