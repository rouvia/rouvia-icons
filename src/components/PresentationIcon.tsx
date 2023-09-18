import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/presentation.svg';

const PresentationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PresentationIcon };
