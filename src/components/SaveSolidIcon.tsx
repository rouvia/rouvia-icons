import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/save_solid.svg';

const SaveSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SaveSolidIcon };
