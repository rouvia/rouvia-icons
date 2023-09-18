import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/pencil.svg';

const PencilIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PencilIcon };
