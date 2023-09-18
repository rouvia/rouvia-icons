import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/close-circle.svg';

const CloseCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloseCircleIcon };
