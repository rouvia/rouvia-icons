import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/close-circle_solid.svg';

const CloseCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloseCircleSolidIcon };
