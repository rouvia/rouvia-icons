import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/folder-plus.svg';

const FolderPlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FolderPlusIcon };
