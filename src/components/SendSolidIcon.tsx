import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/send_solid.svg';

const SendSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SendSolidIcon };
