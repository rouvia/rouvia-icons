import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/key.svg';

const KeyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { KeyIcon };
