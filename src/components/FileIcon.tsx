import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file.svg';

const FileIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FileIcon };
