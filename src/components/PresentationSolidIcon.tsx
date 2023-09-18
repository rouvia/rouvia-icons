import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/presentation_solid.svg';

const PresentationSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PresentationSolidIcon };
