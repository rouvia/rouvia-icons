import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file-plus.svg';

const FilePlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FilePlusIcon };
