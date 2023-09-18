import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/plus.svg';

const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlusIcon };
