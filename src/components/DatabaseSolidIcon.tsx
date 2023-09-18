import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/database_solid.svg';

const DatabaseSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DatabaseSolidIcon };
