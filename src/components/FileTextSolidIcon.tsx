import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file-text_solid.svg';

const FileTextSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FileTextSolidIcon };
