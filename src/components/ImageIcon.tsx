import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/image.svg';

const ImageIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ImageIcon };
