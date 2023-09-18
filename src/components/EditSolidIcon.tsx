import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/edit_solid.svg';

const EditSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EditSolidIcon };
