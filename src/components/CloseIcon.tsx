import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/close.svg';

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloseIcon };
