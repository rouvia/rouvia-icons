import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/comment.svg';

const CommentIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CommentIcon };
