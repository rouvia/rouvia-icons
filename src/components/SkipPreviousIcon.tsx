import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/skip-previous.svg';

const SkipPreviousIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SkipPreviousIcon };
