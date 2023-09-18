import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/list-add.svg';

const ListAddIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ListAddIcon };
