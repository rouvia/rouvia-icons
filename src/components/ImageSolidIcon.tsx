import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/image_solid.svg';

const ImageSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ImageSolidIcon };
