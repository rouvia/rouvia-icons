import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/reply.svg';

const ReplyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ReplyIcon };
