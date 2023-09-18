import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/globe.svg';

const GlobeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GlobeIcon };
