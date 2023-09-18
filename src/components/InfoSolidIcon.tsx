import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/info_solid.svg';

const InfoSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { InfoSolidIcon };
