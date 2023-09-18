import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/skip-next.svg';

const SkipNextIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SkipNextIcon };
