import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/message-square.svg';

const MessageSquareIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MessageSquareIcon };
