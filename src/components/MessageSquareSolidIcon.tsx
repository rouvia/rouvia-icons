import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/message-square_solid.svg';

const MessageSquareSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MessageSquareSolidIcon };
