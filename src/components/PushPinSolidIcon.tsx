import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/push-pin_solid.svg';

const PushPinSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PushPinSolidIcon };
