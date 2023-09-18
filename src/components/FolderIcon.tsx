import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/folder.svg';

const FolderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FolderIcon };
