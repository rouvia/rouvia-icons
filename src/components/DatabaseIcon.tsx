import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/database.svg';

const DatabaseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DatabaseIcon };
