import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/archive.svg';

const ArchiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArchiveIcon };
