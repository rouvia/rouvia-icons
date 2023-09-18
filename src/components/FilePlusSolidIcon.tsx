import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file-plus_solid.svg';

const FilePlusSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FilePlusSolidIcon };
