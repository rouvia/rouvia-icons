import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/list.svg';

const ListIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ListIcon };
