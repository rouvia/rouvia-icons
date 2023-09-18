import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/archive_solid.svg';

const ArchiveSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArchiveSolidIcon };
