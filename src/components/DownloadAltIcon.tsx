import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/download-alt.svg';

const DownloadAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DownloadAltIcon };
