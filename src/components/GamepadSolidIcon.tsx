import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/gamepad_solid.svg';

const GamepadSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GamepadSolidIcon };
