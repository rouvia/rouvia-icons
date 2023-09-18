import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/comment_solid.svg';

const CommentSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CommentSolidIcon };
