import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/server.svg';

const ServerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ServerIcon };
