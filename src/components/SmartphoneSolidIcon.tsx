import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/smartphone_solid.svg';

const SmartphoneSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmartphoneSolidIcon };
