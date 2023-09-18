import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound-off_solid.svg';

const SoundOffSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundOffSolidIcon };
