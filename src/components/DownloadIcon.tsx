import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/download.svg';

const DownloadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DownloadIcon };
