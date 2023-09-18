import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/globe-alt.svg';

const GlobeAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GlobeAltIcon };
