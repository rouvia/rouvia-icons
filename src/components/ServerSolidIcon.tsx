import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/server_solid.svg';

const ServerSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ServerSolidIcon };
