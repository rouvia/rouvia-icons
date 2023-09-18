import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/key_solid.svg';

const KeySolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { KeySolidIcon };
