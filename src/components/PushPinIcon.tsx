import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/push-pin.svg';

const PushPinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PushPinIcon };
