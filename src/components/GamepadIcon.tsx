import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/gamepad.svg';

const GamepadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GamepadIcon };
