import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/at-sign.svg';

const AtSignIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AtSignIcon };
