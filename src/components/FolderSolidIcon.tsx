import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/folder_solid.svg';

const FolderSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FolderSolidIcon };
