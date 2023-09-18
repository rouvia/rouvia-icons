import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/edit.svg';

const EditIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EditIcon };
