import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/folder-plus_solid.svg';

const FolderPlusSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FolderPlusSolidIcon };
