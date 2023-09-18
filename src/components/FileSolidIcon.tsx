import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file_solid.svg';

const FileSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FileSolidIcon };
