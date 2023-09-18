import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/globe-alt_solid.svg';

const GlobeAltSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GlobeAltSolidIcon };
