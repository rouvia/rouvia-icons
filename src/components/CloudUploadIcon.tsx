import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cloud-upload.svg';

const CloudUploadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CloudUploadIcon };
