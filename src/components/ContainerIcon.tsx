import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Container.svg';

const ContainerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ContainerIcon };
