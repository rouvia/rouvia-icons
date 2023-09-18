import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/light-bulb.svg';

const LightBulbIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LightBulbIcon };
