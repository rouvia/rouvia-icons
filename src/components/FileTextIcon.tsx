import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/file-text.svg';

const FileTextIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FileTextIcon };
