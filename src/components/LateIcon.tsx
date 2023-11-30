import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Late.svg';

const LateIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LateIcon };
