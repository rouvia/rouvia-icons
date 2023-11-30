import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Unloading.svg';

const UnloadingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UnloadingIcon };
