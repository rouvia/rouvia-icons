import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/message-circle_solid.svg';

const MessageCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MessageCircleSolidIcon };
