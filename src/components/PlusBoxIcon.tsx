import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/plus-box.svg';

const PlusBoxIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlusBoxIcon };
