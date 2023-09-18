import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/light-bulb_solid.svg';

const LightBulbSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LightBulbSolidIcon };
