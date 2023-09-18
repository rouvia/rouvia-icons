import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chat_solid.svg';

const ChatSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChatSolidIcon };
