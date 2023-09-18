import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/upload-alt.svg';

const UploadAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UploadAltIcon };
