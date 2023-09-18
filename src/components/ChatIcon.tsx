import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chat.svg';

const ChatIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChatIcon };
