import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/message-circle.svg';

const MessageCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MessageCircleIcon };
