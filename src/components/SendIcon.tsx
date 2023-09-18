import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/send.svg';

const SendIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SendIcon };
