import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Seaport.svg';

const SeaportIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SeaportIcon };
