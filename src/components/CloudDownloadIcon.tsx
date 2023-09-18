import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud-download.svg';

const CloudDownloadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudDownloadIcon };
