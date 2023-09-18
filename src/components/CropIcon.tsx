import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/crop.svg';

const CropIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CropIcon };
