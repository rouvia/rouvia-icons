import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/apps_solid.svg';

const AppsSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AppsSolidIcon };
