import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/compass.svg';

const CompassIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CompassIcon };
