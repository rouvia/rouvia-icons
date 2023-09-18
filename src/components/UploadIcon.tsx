import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/upload.svg';

const UploadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UploadIcon };
